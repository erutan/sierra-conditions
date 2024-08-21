---
description: ''
sidebar: 'sierra'
prev: '/conditions/reports/'
next: '/conditions/fire/'
---

# Snow Levels

## Broad Overview

The [Snow Pack Conditions](https://cdec.water.ca.gov/snowapp/sweq.action) page gives you a good high level overview of where snow levels are at historically. Useful in the winter/spring to try and figure out when summer in the alpine will start. The "snow" menu at the top has a few more options as well as particular sensor data. You can also see [snow levels from the current year plotted against a few others of note](https://cdec.water.ca.gov/reportapp/javareports?name=PLOT_SWC) to get more context.

The [forest service has a snow depth tool](https://www.fs.usda.gov/Internet/FSE_DOCUMENTS/fseprd1045012.html) but it is low enough resolution that it can easily underestimate snow levels if it samples rock outcroppings, tree cover, etc. It's useful, but should be taken with a few grains of salt, along with the mapping applications that import this layer.

The NOAA's [regional snow analyses for the Sierra Nevada](https://www.nohrsc.noaa.gov/nsa/index.html?units=e&region=Sierras) has a lot of high level snow and water information in graphical form, though it's better used to understand trends or an overview vs details about a specific location.

## Recent Sentinel 2 Satellite Imagery

There's a number of ways to view medium-high resolution satellite imagery that is 4-6 days old:
* [Copernicus Browser](https://browser.dataspace.copernicus.eu/?zoom=10&lat=37.3887&lng=-119.03248&themeId=DEFAULT-THEME&visualizationUrl=U2FsdGVkX19mL%2BpmxXk0WVEN3PDm3P7chI2nAlrihax50%2FcpnXDGfXBg4OZFWTWxL3fHPmASzIoT6wPByOGblzCJEdHanDpy477pkzCOk0G8z7IbebE3ssDcyN2%2FlzYS&datasetId=S2_L2A_CDAS&fromTime=2024-08-20T00%3A00%3A00.000Z&toTime=2024-08-20T23%3A59%3A59.999Z&layerId=1_TRUE_COLOR&demSource3D=%22MAPZEN%22&cloudCoverage=30&dateMode=SINGLE) is a very powerful free service. Basically use the search field up top go to the area you want, then in the hamburger menu check contours, labels, and roads etc to have more of an idea of what you're looking at. By default it will load the latest Sentinel 2 imagery for your area, you can move between dates, filter for maximum cloud cover, or choose different layers or . The ability to load scans from past years is very useful if you've done a route before - I was able to load early September 2017 (when I went over some passes holding snow) and compare it to July 2024 and saw conditions were currently slightly simpler than before!
* [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=13&lat=37.71513&lng=-119.18449#search) is a free service from Sentinel Hub. They have a tutorial that explains the UI, it is a similar process to the Copernicus Browser above.
* You can integrate Sentinel 2 data into [Caltopo](https://caltopo.com/) with their $50/year plan, which is covered in this [blog post](https://blog.caltopo.com/2023/01/12/winter-travel-series-4-learning-about-current-and-forecasted-conditions/) by them.  This is handy for getting an idea if it overlays a specific trail etc vs the area it's in as you have access to CalTopo's map layers which have a lot more detail than Copernicus & EO Browser's basic topo.
* GaiaGPS has a map layer called "[FreshSat](https://blog.gaiagps.com/view-recent-conditions-with-fresh-sat-maps/)" which tries to mix the best of Sentinel 2 and Landsat data. While this is theoretically better than the above, there may be some contrast and alignment issues as layers are blended. It's available for all users on the web, and on the mobile app with a Gaia GPS premium membership. Their cloud detection is less sophisticated than the sentinel-hub site, and is often out of date, and you can't go back to previous scans... but it's a different option.

## (Eastern) Sierra Avalanche Center

[ESAC](https://esavalanche.org/) [observations](https://esavalanche.org/ObservationsPage) page with trip reports)covers the region from Lee vining down to Bishop, and [SAC](https://www.sierraavalanchecenter.org/) ([observations](https://www.sierraavalanchecenter.org/observations) page with trip reports) covers the area between Ebbetts and Yuba. The forecasts pages on both are also worth checking, as well as general information regarding avalanche safety. [Avalanche.org](https://avalanche.org/) shows all forecsat areas in the US.

##  Monitoring station data (quirky)

Individual monitoring stations give much more specific (and accurate) data than satellite based ones, but there aren't that many of them. High altitude ones can not be reporting, and low altitude ones aren't that useful. YMMV.

The [National Water and Climate Center's interactive map](https://nwcc-apps.sc.egov.usda.gov/imap/#version=169&elements=&networks=!&states=!&basins=!&hucs=&minElevation=&maxElevation=&elementSelectType=any&activeOnly=true&activeForecastPointsOnly=false&hucLabels=false&hucIdLabels=false&hucParameterLabels=true&stationLabels=&overlays=&hucOverlays=&basinOpacity=75&basinNoDataOpacity=25&basemapOpacity=100&maskOpacity=0&mode=data&openSections=dataElement,parameter,date,basin,options,elements,location,networks&controlsOpen=true&popup=&popupMulti=&popupBasin=&base=esriNgwm&displayType=basinstation&basinType=6&dataElement=WTEQ&depth=-8&parameter=PCTMED&frequency=DAILY&duration=I&customDuration=&dayPart=E&monthPart=E&forecastPubDay=1&forecastExceedance=50&useMixedPast=true&seqColor=1&divColor=7&scaleType=D&scaleMin=&scaleMax=&referencePeriodType=POR&referenceBegin=1991&referenceEnd=2020&minimumYears=20&hucAssociations=true&relativeDate=-1&lat=42.875&lon=-112.010&zoom=5.5) shows data from monitoring stations across the Sierra Nevada, some at a respectable altitude.  Viewing this with overall averages by basin You can also get a [listing of the stations](https://wcc.sc.egov.usda.gov/reportGenerator/view/customMultipleStationReport/daily/state=%22CA%22%20AND%20network=%22SNTLT%22,%22SNTL%22%20AND%20element=%22SNWD%22%20AND%20outServiceDate=%222100-01-01%22%7cname/0,0/name,stationId,WTEQ::value,WTEQ::delta,SNWD::value,SNWD::delta?fitToScreen=false) for California. 

For more detailed information to dig into, check out the [California Data Exchange Center](https://cdec.water.ca.gov/snow/current/snow/) for individual snow levels in various locations. You can also search for individual sensors by [river basin](https://cdec.water.ca.gov/cgi-progs/getAll?sens_num=3) or check a list of [active snow sensors](https://cdec.water.ca.gov/misc/SnowDepth.html). They publish bulletins on [the second week of February, March, April, and May](https://cdec.water.ca.gov/snow/bulletin120/index2.html#) containing forecasts of the volume of seasonal runoff from the state's major watersheds, and summaries of precipitation, snowpack, reservoir storage, and runoff in various regions of the State.

Gaia GPS premium members can get [snowtel overlays showing recent changes](https://blog.gaiagps.com/find-fresh-snow-with-the-new-snow-stations-daily-map/) when they have an active internet connection.

## Other resources

[GISsurfer](https://mappingsupport.com/p2/gissurfer-interactive-recreation-disaster-maps.html) is a little janky, but allows you to play around with a ton of GIS layers including snow and water.

For water levels, as opposed to snow, [Dreamflows](https://www.dreamflows.com/flows.php?zone=canv&page=real&form=norm&mark=All) has gathered up stream flow sensors in California & Nevada and done a good job of providing at a glance comments on it to put the data in context. Mostly lower elevation larger rivers or reservoir related, but could be useful.