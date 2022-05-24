---
description: ''
sidebar: 'sierra'
prev: '/conditions/trip/'
next: '/conditions/fire/'
---

# Snow Levels

## Sentinel 2 Satellite Imagery

For medium-high resolution satellite imagery that is 4-6 days old, there's a number of ways to get Sentinel data. 

* [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=37.35761&lng=-118.9016&themeId=DEFAULT-THEME) is another free offering from Sentinel Hub, which has more options to it if you want to play around a bit. It's a bit easier to navigate via OSM map (use the layers menu in the upper right to toggle sentinel data, sadly no contours) and then to search for available satellite data for a particular area and then load sentinel data. You can estimated cloud cover and select which date you want to show from a calendar widget. I prefer this over Sentinel Playground. For either it's good to go through their tutorial / walkthrough as the UI is complex.
* The [Sentinel Playground](https://www.sentinel-hub.com/explore/sentinelplayground/) is another free offering. To make it easier to find the area you're interested in, you can turn all the satellite images off with the datasets pull down on the right side. That then let’s you navigate much easier on a base map - it’s not quite a topo map - but much easier than trying to navigate with the satellite image on. In order to see what date the imagery is from, go to the left menu sidebar, switch from rendering to effects, and toggle "show aquisition dates" and date overlays will overlay on the slices of images.
* Buying access through [Sentinel Hub](https://www.sentinel-hub.com/) is a bit pricey, but lets you integrate with mapping providers of your choice.
* You can integrate Sentinel 2 data into [Caltopo](https://caltopo.com/) with their $50/year plan. This makes it far easier to find specific spots vs looking at lake outlines and a topo map.
* USGS's [Sentinel2Look viewer](https://landlook.usgs.gov/sentinel2/viewer.html) lets you filter for cloud cover and view historical data from 2015.
* GaiaGPS has a clever map layer called "[FreshSat](https://blog.gaiagps.com/view-recent-conditions-with-fresh-sat-maps/)" which tries to mix the best of Sentinel 2 and Landsat data. While this is theoretically better than the above, there may be some contrast and lineup issues. It's available for all users on the web, and on the mobile app with a Gaia GPS premium membership. As of May 2021 their cloud detection is less sophisticated than the sentinel-hub site, and without the functionality to go back to previous scans it works as a quick first check but you might need to follow up elsewhere. It also is lower resolution than the imagery available at EO Browser.

## (Eastern) Sierra Avalanche Center

[ESAC](https://esavalanche.org/) [observations](https://esavalanche.org/ObservationsPage) page with trip reports)covers the region from Lee vining down to Bishop, and [SAC](https://www.sierraavalanchecenter.org/) ([observations](https://www.sierraavalanchecenter.org/observations) page with trip reports) covers the area between Ebbetts and Yuba. The forecasts pages on both are also worth checking, as well as general information regarding avalanche safety. [Avalance.org](https://avalanche.org/) shows all forecsat areas in the US.

## Satellite Data Analysis

The NOAA's [regional snow analyses for the Sierra Nevada](https://www.nohrsc.noaa.gov/nsa/index.html?units=e&region=Sierras) has a lot of high level snow and water information in graphical form, though it's better used to understand trends or an overview vs a specific location. The [forest service has a similar tool with more detail](https://www.fs.fed.us/r5/webmaps/SierraSnowDepth/), but is low enough resolution that it can easily underestimate snow levels if it samples rock outcroppings, tree cover, etc. It's useful, but should be taken with a few grains of salt, along with the mapping applications that import this layer.

##  Monitoring station data

Individual monitoring stations give much more specific (and accurate) data than satellite based ones, but there aren't that many of them. 

The [Snow Water Equivalents](https://cdec.water.ca.gov/snowapp/sweq.action) page gives you a good high level overview of where snow levels are at historically. Useful in the winter/spring to try and figure out when summer in the alpine will start. The "snow" menu at the top has a few more options. One is a [granular breakdown by basins](https://tableau.cnra.ca.gov/t/DWR_Snow_WSFcast/views/SnowProductComparisons_V2/Dashboard1?iframeSizedToWindow=true&%3Aembed=y&%3AshowAppBanner=false&%3Adisplay_count=no&%3AshowVizHome=no) updated weekly, which gives you an idea of the margin of error given the different sources included. You can also see [snow levels from the current year plotted against a few others](https://cdec.water.ca.gov/reportapp/javareports?name=PLOT_SWC) of note.

For more detailed information to dig into, check out the [California Data Exchange Center](https://cdec.water.ca.gov/snow/current/snow/) for individual snow levels in various locations. You can also search for individual sensors by [river basin](https://cdec.water.ca.gov/cgi-progs/getAll?sens_num=3) or check a list of [active snow sensors](https://cdec.water.ca.gov/misc/SnowDepth.html). They publish bulletins on [the second week of February, March, April, and May](https://cdec.water.ca.gov/snow/bulletin120/index2.html#) containing forecasts of the volume of seasonal runoff from the state's major watersheds, and summaries of precipitation, snowpack, reservoir storage, and runoff in various regions of the State.

The USDA's [snowtel map](https://www.nrcs.usda.gov/wps/portal/wcc/home/quicklinks/imap#version=158&elements=&networks=!&states=CA&counties=!&hucs=&minElevation=&maxElevation=&elementSelectType=all&activeOnly=true&activeForecastPointsOnly=false&hucLabels=false&hucIdLabels=false&hucParameterLabels=false&stationLabels=&overlays=&hucOverlays=&basinOpacity=100&basinNoDataOpacity=100&basemapOpacity=100&maskOpacity=0&mode=data&openSections=dataElement,parameter,date,basin,elements,location,networks&controlsOpen=true&popup=&popupMulti=&popupBasin=&base=esriNgwm&displayType=station&basinType=6&dataElement=WTEQ&depth=-8&parameter=OBS&frequency=DAILY&duration=I&customDuration=&dayPart=E&year=2022&month=5&day=23&monthPart=E&forecastPubMonth=6&forecastPubDay=1&forecastExceedance=50&seqColor=1&divColor=3&scaleType=D&scaleMin=&scaleMax=&referencePeriodType=POR&referenceBegin=1981&referenceEnd=2010&minimumYears=20&hucAssociations=true&lat=37.1669&lon=-118.8309&zoom=9.0) shows data from monitoring stations across the Sierra Nevada, many at a respectable altitude. You can also get a [listing of the stations](https://wcc.sc.egov.usda.gov/reportGenerator/view/customMultipleStationReport/daily/state=%22CA%22%20AND%20network=%22SNTLT%22,%22SNTL%22%20AND%20element=%22SNWD%22%20AND%20outServiceDate=%222100-01-01%22%7cname/0,0/name,stationId,WTEQ::value,WTEQ::delta,SNWD::value,SNWD::delta?fitToScreen=false) for California. Gaia GPS premium members can get [snowtel overlays showing recent changes](https://blog.gaiagps.com/find-fresh-snow-with-the-new-snow-stations-daily-map/) when they have an active internet connection.

## Other resources

[GISsurfer](https://mappingsupport.com/p2/gissurfer-interactive-recreation-disaster-maps.html) is a little janky, but allows you to play around with a ton of GIS layers including snow and water.

For water levels, as opposed to snow, [Dreamflows](https://www.dreamflows.com/flows.php?zone=canv&page=real&form=norm&mark=All) has gathered up stream flow sensors in California & Nevada and done a good job of providing at a glance comments on it to put the data in context. Mostly lower elevation larger rivers or reservoir related, but could be useful.