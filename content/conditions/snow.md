---
description: ''
sidebar: 'sierra'
prev: '/conditions/trip/'
next: '/conditions/fire/'
---

# Snow Levels

## CA State Sites

The [Snow Water Equivalents](https://cdec.water.ca.gov/snowapp/sweq.action) page gives you a good high level overview of where snow levels are at historically. Useful in the winter/spring to try and figure out when summer in the alpine will start. 

For more detailed information you need to dig into, check out the [California Data Exchange Center](https://cdec.water.ca.gov/snow/current/snow/) for individual snow levels in various locations.

## Snowtel

The USDA's [snowtel map](https://www.nrcs.usda.gov/wps/portal/wcc/home/quicklinks/imap#version=115&elements=&networks=!&states=CA&counties=!&hucs=&minElevation=&maxElevation=&elementSelectType=all&activeOnly=true&activeForecastPointsOnly=false&hucLabels=false&hucIdLabels=false&hucParameterLabels=false&stationLabels=&overlays=&hucOverlays=&basinOpacity=100&basinNoDataOpacity=100&basemapOpacity=100&maskOpacity=0&mode=data&openSections=dataElement,parameter,date,basin,elements,location,networks&controlsOpen=true&popup=&popupMulti=&base=esriNgwm&displayType=station&basinType=6&dataElement=WTEQ&depth=-8&parameter=PCTPORMED&frequency=DAILY&duration=I&customDuration=&dayPart=E&year=2020&month=6&day=7&monthPart=E&forecastPubMonth=6&forecastPubDay=1&forecastExceedance=50&seqColor=1&divColor=3&scaleType=D&scaleMin=&scaleMax=&referencePeriodType=POR&referenceBegin=1981&referenceEnd=2010&minimumYears=20&hucAssociations=true&lat=37.936&lon=-118.875&zoom=8.0) shows data from monitoring stations across the Sierra Nevada. You can also get a [listing of stations](https://wcc.sc.egov.usda.gov/reportGenerator/view/customMultipleStationReport/daily/state=%22CA%22%20AND%20network=%22SNTLT%22,%22SNTL%22%20AND%20element=%22SNWD%22%20AND%20outServiceDate=%222100-01-01%22%7cname/0,0/name,stationId,WTEQ::value,WTEQ::delta,SNWD::value,SNWD::delta?fitToScreen=false) for California.

Gaia GPS premium members can get [snowtel overlays showing recent changes](https://blog.gaiagps.com/find-fresh-snow-with-the-new-snow-stations-daily-map/) when they have an active internet connection.

## Sentinel 2 Satellite Imagery

For medium-high resolution satellite imagery that is 4-6 days old, there's a number of ways to get Sentinel data. 

* The [Sentinel Playground](https://www.sentinel-hub.com/explore/sentinelplayground/) is free, and while you can't layer a topo on top of it you'll get flickers of topo when you're changing zoom levels and tiles load. In the left menu sidebar, go from rendering to effects, and toggle "show aquisition dates" to able to see when the actual imagery is from. 
* [EO Browser](https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=37.35761&lng=-118.9016&themeId=DEFAULT-THEME) is another free offering from Sentinel Hub, which has more options to it if you want to play around a bit. It's a bit easier to navigate via OSM topo and then to search for available satellite data for a particular area.
* Buying access through [Sentinel Hub](https://www.sentinel-hub.com/) is a bit pricey, but lets you integrate with mapping providers of your choice.
* You can integrate Sentinel 2 data into [Caltopo](https://caltopo.com/) with their $50/year plan.
* USGS's [Sentinel2Look viewer](https://landlook.usgs.gov/sentinel2/viewer.html) lets you filter for cloud cover and view historical data from 2015.

## Gaia "FreshSat" (Sentinel 2 + Landsat-8)

* GaiaGPS has a clever map layer called "[FreshSat](https://blog.gaiagps.com/view-recent-conditions-with-fresh-sat-maps/)" which tries to mix the best of Sentinel 2 and Landsat data. While this is theoretically better than the above, there may be some contrast and lineup issues. It's available for all users on the web, and on the application with a Gaia GPS premium membership. 

## Other resources

iWeathernet [google map overlay](https://www.iweathernet.com/snow/snow-depth-and-percent-coverage) that pulls in data a few times a day.


