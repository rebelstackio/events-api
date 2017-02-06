# rebelstackio/events-api
Our first co-op app


# environment variables

NODE_QUIET=[false]
- When NODE_QUIET is set with any value other than "false", it will inform the logger to shut the heck up (useful for unit-test output). This is non-standard.


PGPROFILE=[false]
- turns the profiler on when any value (other than false) is supplied


NODE_ENV=production|testing|[development]
- NODE_ENV is a common (standard?) environment variable that is used by NPM


PORT=[8888]


TRUST_PROXY=anyvalue|[false]|0
- Setting any value tells express js to trust proxy


STATIC_DIR=local-directory-url
- the directory to find static files
- only available in development
- relative to root of project


STATIC_RURL=[/static]
- the endpoint url to serve static files
- only available in development


PGPROFILE=[false]

AWS...
AWS_ACCESS_KEY_ID=***
AWS_SECRET_ACCESS_KEY=***
AWS_REGION=[us-west-2]


Postgresql...
PGUSER=node
PGPASSWORD=xxxxxxxx
PGHOST=localhost
PGPORT=5432
PGDATABASE=node



# Development #

# etc/hosts #
Entry is automatically made in vagrant environment but you'll need to add the
same to your local hosts file:

192.168.88.88		api.qchevere.local

once added you can simply visit: http://api.qchevere.local:8888
which maps to http://192.168.88.88:8888


# debugging #

## Chrome Debugging ##

Update a chrome flag to have full ES6 awesomeness:

    chrome://flags/#enable-javascript-harmony

- is this necessary?!?

to get vagrant box built, cd into quehacemos/vagrant then run:

    $ vagrant up

once build, ssh into the box executing:

    $ vagrant ssh

once inside, locate the project at /events-api

    $ node-inspector & # running in the background

    $ node --debug-brk server.js


goto local browser: http://api.qchevere.local/?port=5858


# Unit-tests #

Following the same procedure to run vagrant (above), from /events-api run:

    $ npm test

or directly with:

    $ mocha


Need to debug unit-tests? It uses the same chrome debugging routine:

    $ node-inspector & # running in the background

    $ mocha --debug-brk


goto local browser: http://api.qchevere.local/?port=5858



# About tags

# Filter Tags #
Use filter tags in the search bar to narrow your list to matching events.

**Content Tags** :: art[2¹], book[2²], movie[2³], fundraiser[2⁴], volunteer[2⁵], family[2⁶], festival[2⁷], neighborhood[2⁸], religious[2⁹], shopping[2¹⁰], comedy[2¹¹], music[2¹²], dance[2¹³], nightlife[2¹⁴], theater[2¹⁵], dining[2¹⁶], food-tasting[2¹⁷], conference[2¹⁸], meetup[2¹⁹], class[2²⁰], lecture[2²¹], workshop[2²²], fitness[2²³], sports[2²⁴], other[2²⁵], cinema[2²⁶]

**Target Tags** :: kids[2¹], family[2²], young-adult[2³], young-adult-f[2⁴], young-adult-m[2⁵], adult[2⁶], adult-f[2⁷], adult-m[2⁸], lesbian[2⁹], gay[2¹⁰], xxx[2¹¹]

**Pricing Tags** :: free[2¹], non-free[2²]

**Date/Time Tags** :: monday[2¹] .. sunday[2⁷], january[2⁸] .. december[2¹⁹], morning[2²⁰], afternoon[2²¹], evening[2²²], night[2²³], today[2²⁴], tonight[2²⁵], tomorrow[2²⁶], tomorrow-night[2²⁷]

**Social Tags** :: popular[2¹], im-going[2²], friends-going[2³],  bookmarked[2⁴ [my-bookmarks]

**Location Tags** :: [district name] ie. 'barranco'[2¹] (dependant on Locales tags)

**Locales Tags** ::
en-US[2¹], en-CA[2²], en-GB[2³], en-AU[2⁴], en-BZ[2⁵], en-IE[2⁶], en-IN[2⁷], en-JM[2⁸], en-MY[2⁹], en-NZ[2¹⁰], en-PH[2¹¹], en-SG[2¹²], en-TT[2¹³], en-ZA[2¹⁴], en-ZW[2¹⁵],
es-AR[2¹⁶], es-BO[2¹⁷], es-CL[2¹⁸], es-CO[2¹⁹], es-CR[2²⁰], es-DO[2²¹], es-EC[2²²], es-ES[2²³], es-GT[2²⁴], es-HN[23²⁵], es-MX[2²⁶], es-NI[2²⁷], es-PA[2²⁸], es-PE[2²⁹], es-PR[2³⁰], es-PY[2³¹], es-SV[2³²], es-US[2³³], es-UY[2³⁴], es-VE[23³⁵]

**Custom Tags** :: 'slipknot'

**Locales-ext Tags** :: when we need to grow to cover more locales  

## Auto-completing Tags ##
Our filter saves you time by offering tags suggestions matching the letters you have typed - just click the auto-suggestion to use the tag or finish your own custom tag with a space.

## Custom Tags ##
Custom tags act like search terms against titles of events so if you're just looking for more information about the Slipknot concert, just type 'slipknot ' into the search bar without clicking any suggested tags.

## Composing a tagmask filter array ##
since we are limited to 31 bit flags (for quick n easy bitwise operations in javascript), our flags must be grouped:

Group 1: content tags
Group 2: target tags
Group 3: pricing tags
Group 4: date/time tags
Group 5: social tags
Group 6: location tags
Group 7: locales tags
Group 8: custom tags

tagmasks are composed in an an array such as:

```
      [ 2¹|2⁶, 2¹, 2¹, 2²¹|2²⁶, 2¹, 2¹, 2²⁹, 'juegos payasos' ]

 content^      ^   ^   ^        ^   ^   ^    ^
         target^   ^   ^        ^   ^   ^    ^
            pricing^   ^        ^   ^   ^    ^
               datetime^        ^   ^   ^    ^
                          social^   ^   ^    ^
			    location^   ^    ^
                                 locales^    ^
                                       custom^
```

where this example tagmask array filter results in:

 [ art|family, kids, free, afternoon|tomorrow, popular, barranco, es-PE, 'juegos payasos' ]
