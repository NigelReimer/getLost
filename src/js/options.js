/// <reference path='typedefs.js'/>

/** @type {GetLostOptions} */
const options = {
  defaultCenter: new google.maps.LatLng(38, -98),
  defaultZoom: 5,
  exclusionMultiplier: 100,
  maxExclusions: 5,
  requestRadius: 1000,
  scoreRound: (meters, seconds) => {
    let distanceScore = Math.log10(meters);
    distanceScore = distanceScore < 1 ? 1 : distanceScore > 7 ? 7 : distanceScore;
    distanceScore = 10 - 5 * Math.pow(distanceScore - 1, 2) / 18;

    let timeScore = Math.log2(seconds);
    timeScore = timeScore < 3 ? 3 : timeScore > 12 ? 12 : timeScore;
    timeScore = 10 - 10 * Math.pow(timeScore - 3, 2) / 81;

    let totalScore = (((distanceScore * timeScore) + (distanceScore + timeScore) * 10) / 3);

    return `${totalScore.toFixed(1)}/100`;
  },
  destinations: [
    new google.maps.Circle({center: {lat: 40.6635, lng: -73.9387}, radius: 15766}),
    new google.maps.Circle({center: {lat: 34.0194, lng: -118.4108}, radius: 19657}),
    new google.maps.Circle({center: {lat: 41.8376, lng: -87.6818}, radius: 13689}),
    new google.maps.Circle({center: {lat: 29.7866, lng: -95.3909}, radius: 22925}),
    new google.maps.Circle({center: {lat: 33.5722, lng: -112.0901}, radius: 20657}),
    new google.maps.Circle({center: {lat: 40.0094, lng: -75.1333}, radius: 10519}),
    new google.maps.Circle({center: {lat: 29.4724, lng: -98.5251}, radius: 19495}),
    new google.maps.Circle({center: {lat: 32.8153, lng: -117.135}, radius: 16374}),
    new google.maps.Circle({center: {lat: 32.7933, lng: -96.7665}, radius: 16764}),
    new google.maps.Circle({center: {lat: 37.2967, lng: -121.8189}, radius: 12097}),
    new google.maps.Circle({center: {lat: 30.3039, lng: -97.7544}, radius: 16056}),
    new google.maps.Circle({center: {lat: 30.3369, lng: -81.6616}, radius: 24823}),
    new google.maps.Circle({center: {lat: 32.7815, lng: -97.3467}, radius: 16813}),
    new google.maps.Circle({center: {lat: 39.9852, lng: -82.9848}, radius: 13421}),
    new google.maps.Circle({center: {lat: 35.2078, lng: -80.831}, radius: 15868}),
    new google.maps.Circle({center: {lat: 37.7272, lng: -123.0322}, radius: 6219}),
    new google.maps.Circle({center: {lat: 39.7767, lng: -86.1459}, radius: 17264}),
    new google.maps.Circle({center: {lat: 47.6205, lng: -122.3509}, radius: 8311}),
    new google.maps.Circle({center: {lat: 39.7619, lng: -104.8811}, radius: 11241}),
    new google.maps.Circle({center: {lat: 38.9041, lng: -77.0172}, radius: 7096}),
    new google.maps.Circle({center: {lat: 42.332, lng: -71.0202}, radius: 6310}),
    new google.maps.Circle({center: {lat: 31.8484, lng: -106.427}, radius: 14550}),
    new google.maps.Circle({center: {lat: 36.1718, lng: -86.785}, radius: 19808}),
    new google.maps.Circle({center: {lat: 42.383, lng: -83.1022}, radius: 10697}),
    new google.maps.Circle({center: {lat: 35.4671, lng: -97.5137}, radius: 22357}),
    new google.maps.Circle({center: {lat: 45.537, lng: -122.65}, radius: 10491}),
    new google.maps.Circle({center: {lat: 36.2292, lng: -115.2601}, radius: 10526}),
    new google.maps.Circle({center: {lat: 35.1028, lng: -89.9774}, radius: 16177}),
    new google.maps.Circle({center: {lat: 38.1654, lng: -85.6474}, radius: 14739}),
    new google.maps.Circle({center: {lat: 39.3, lng: -76.6105}, radius: 8166}),
    new google.maps.Circle({center: {lat: 43.0633, lng: -87.9667}, radius: 8906}),
    new google.maps.Circle({center: {lat: 35.1056, lng: -106.6474}, radius: 12456}),
    new google.maps.Circle({center: {lat: 32.1531, lng: -110.8706}, radius: 13794}),
    new google.maps.Circle({center: {lat: 36.7836, lng: -119.7934}, radius: 9712}),
    new google.maps.Circle({center: {lat: 33.4019, lng: -111.7174}, radius: 10663}),
    new google.maps.Circle({center: {lat: 38.5666, lng: -121.4686}, radius: 8985}),
    new google.maps.Circle({center: {lat: 33.7629, lng: -84.4227}, radius: 10491}),
    new google.maps.Circle({center: {lat: 39.1251, lng: -94.551}, radius: 16115}),
    new google.maps.Circle({center: {lat: 38.8673, lng: -104.7607}, radius: 12699}),
    new google.maps.Circle({center: {lat: 41.2644, lng: -96.0451}, radius: 10479}),
    new google.maps.Circle({center: {lat: 35.8306, lng: -78.6418}, radius: 10937}),
    new google.maps.Circle({center: {lat: 25.7752, lng: -80.2086}, radius: 5447}),
    new google.maps.Circle({center: {lat: 33.8092, lng: -118.1553}, radius: 6440}),
    new google.maps.Circle({center: {lat: 36.78, lng: -76.0252}, radius: 14204}),
    new google.maps.Circle({center: {lat: 37.7698, lng: -122.2257}, radius: 6789}),
    new google.maps.Circle({center: {lat: 44.9633, lng: -93.2683}, radius: 6673}),
    new google.maps.Circle({center: {lat: 36.1279, lng: -95.9023}, radius: 12737}),
    new google.maps.Circle({center: {lat: 27.9701, lng: -82.4797}, radius: 9669}),
    new google.maps.Circle({center: {lat: 32.7007, lng: -97.1247}, radius: 8887}),
    new google.maps.Circle({center: {lat: 30.0534, lng: -89.9345}, radius: 11817}),
    new google.maps.Circle({center: {lat: 37.6907, lng: -97.3459}, radius: 11499}),
    new google.maps.Circle({center: {lat: 35.3212, lng: -119.0183}, radius: 11076}),
    new google.maps.Circle({center: {lat: 41.4785, lng: -81.6794}, radius: 8003}),
    new google.maps.Circle({center: {lat: 39.688, lng: -104.6897}, radius: 11250}),
    new google.maps.Circle({center: {lat: 33.8555, lng: -117.7601}, radius: 6420}),
    new google.maps.Circle({center: {lat: 21.3243, lng: -157.8476}, radius: 7063}),
    new google.maps.Circle({center: {lat: 33.7363, lng: -117.883}, radius: 4727}),
    new google.maps.Circle({center: {lat: 33.9381, lng: -117.3932}, radius: 8182}),
    new google.maps.Circle({center: {lat: 27.7543, lng: -97.1734}, radius: 11997}),
    new google.maps.Circle({center: {lat: 38.0407, lng: -84.4583}, radius: 15290}),
    new google.maps.Circle({center: {lat: 36.0097, lng: -115.0357}, radius: 9291}),
    new google.maps.Circle({center: {lat: 37.9763, lng: -121.3133}, radius: 7132}),
    new google.maps.Circle({center: {lat: 44.9489, lng: -93.1041}, radius: 6548}),
    new google.maps.Circle({center: {lat: 39.1402, lng: -84.5058}, radius: 7989}),
    new google.maps.Circle({center: {lat: 38.6357, lng: -90.2446}, radius: 7150}),
    new google.maps.Circle({center: {lat: 40.4398, lng: -79.9766}, radius: 6759}),
    new google.maps.Circle({center: {lat: 36.0951, lng: -79.827}, radius: 10285}),
    new google.maps.Circle({center: {lat: 40.8105, lng: -96.6803}, radius: 8713}),
    new google.maps.Circle({center: {lat: 61.1743, lng: -149.2843}, radius: 37509}),
    new google.maps.Circle({center: {lat: 33.0508, lng: -96.7479}, radius: 7688}),
    new google.maps.Circle({center: {lat: 28.4166, lng: -81.2736}, radius: 9313}),
    new google.maps.Circle({center: {lat: 33.6784, lng: -117.7713}, radius: 7354}),
    new google.maps.Circle({center: {lat: 40.7242, lng: -74.1726}, radius: 4457}),
    new google.maps.Circle({center: {lat: 35.9811, lng: -78.9029}, radius: 9515}),
    new google.maps.Circle({center: {lat: 32.6277, lng: -117.0152}, radius: 6396}),
    new google.maps.Circle({center: {lat: 41.6641, lng: -83.5819}, radius: 8156}),
    new google.maps.Circle({center: {lat: 41.0882, lng: -85.1439}, radius: 9550}),
    new google.maps.Circle({center: {lat: 27.762, lng: -82.6441}, radius: 7139}),
    new google.maps.Circle({center: {lat: 27.5604, lng: -99.4892}, radius: 9129}),
    new google.maps.Circle({center: {lat: 40.7114, lng: -74.0648}, radius: 3492}),
    new google.maps.Circle({center: {lat: 33.2829, lng: -111.8549}, radius: 7315}),
    new google.maps.Circle({center: {lat: 43.0878, lng: -89.4299}, radius: 7967}),
    new google.maps.Circle({center: {lat: 33.5656, lng: -101.8867}, radius: 10135}),
    new google.maps.Circle({center: {lat: 33.6843, lng: -111.8611}, radius: 12313}),
    new google.maps.Circle({center: {lat: 39.5491, lng: -119.8499}, radius: 9405}),
    new google.maps.Circle({center: {lat: 42.8925, lng: -78.8597}, radius: 5770}),
    new google.maps.Circle({center: {lat: 33.3103, lng: -111.7431}, radius: 7487}),
    new google.maps.Circle({center: {lat: 33.5331, lng: -112.1899}, radius: 6981}),
    new google.maps.Circle({center: {lat: 36.2857, lng: -115.0939}, radius: 8988}),
    new google.maps.Circle({center: {lat: 36.1027, lng: -80.261}, radius: 10452}),
    new google.maps.Circle({center: {lat: 36.6794, lng: -76.3018}, radius: 16705}),
    new google.maps.Circle({center: {lat: 36.923, lng: -76.2446}, radius: 6628}),
    new google.maps.Circle({center: {lat: 37.4945, lng: -121.9412}, radius: 7993}),
    new google.maps.Circle({center: {lat: 32.9098, lng: -96.6303}, radius: 6854}),
    new google.maps.Circle({center: {lat: 32.8577, lng: -96.97}, radius: 7431}),
    new google.maps.Circle({center: {lat: 25.8699, lng: -80.3029}, radius: 4211}),
    new google.maps.Circle({center: {lat: 37.5314, lng: -77.476}, radius: 7022}),
    new google.maps.Circle({center: {lat: 43.6002, lng: -116.2317}, radius: 8226}),
    new google.maps.Circle({center: {lat: 47.6669, lng: -117.4333}, radius: 7525}),
    new google.maps.Circle({center: {lat: 30.4422, lng: -91.1309}, radius: 8416}),
    new google.maps.Circle({center: {lat: 47.2522, lng: -122.4598}, radius: 6401}),
    new google.maps.Circle({center: {lat: 34.1416, lng: -117.2936}, radius: 7121}),
    new google.maps.Circle({center: {lat: 37.6375, lng: -121.003}, radius: 5955}),
    new google.maps.Circle({center: {lat: 34.109, lng: -117.4629}, radius: 5955}),
    new google.maps.Circle({center: {lat: 41.5726, lng: -93.6102}, radius: 8560}),
    new google.maps.Circle({center: {lat: 33.9233, lng: -117.2057}, radius: 6504}),
    new google.maps.Circle({center: {lat: 34.403, lng: -118.5042}, radius: 6599}),
    new google.maps.Circle({center: {lat: 35.0828, lng: -78.9735}, radius: 11034}),
    new google.maps.Circle({center: {lat: 33.5274, lng: -86.799}, radius: 10975}),
    new google.maps.Circle({center: {lat: 34.2023, lng: -119.2046}, radius: 4710}),
    new google.maps.Circle({center: {lat: 43.1699, lng: -77.6169}, radius: 5432}),
    new google.maps.Circle({center: {lat: 27.2806, lng: -80.3883}, radius: 9900}),
    new google.maps.Circle({center: {lat: 42.9612, lng: -85.6556}, radius: 6050}),
    new google.maps.Circle({center: {lat: 34.699, lng: -86.673}, radius: 13264}),
    new google.maps.Circle({center: {lat: 40.7769, lng: -111.931}, radius: 9575}),
    new google.maps.Circle({center: {lat: 33.1554, lng: -96.8226}, radius: 7470}),
    new google.maps.Circle({center: {lat: 40.9459, lng: -73.8674}, radius: 3851}),
    new google.maps.Circle({center: {lat: 35.1999, lng: -101.8302}, radius: 9143}),
    new google.maps.Circle({center: {lat: 34.1814, lng: -118.2458}, radius: 5005}),
    new google.maps.Circle({center: {lat: 33.6906, lng: -118.0093}, radius: 4710}),
    new google.maps.Circle({center: {lat: 33.1985, lng: -96.668}, radius: 7208}),
    new google.maps.Circle({center: {lat: 32.3472, lng: -86.2661}, radius: 11478}),
    new google.maps.Circle({center: {lat: 33.3655, lng: -82.0734}, radius: 15792}),
    new google.maps.Circle({center: {lat: 41.7635, lng: -88.2901}, radius: 6084}),
    new google.maps.Circle({center: {lat: 41.0805, lng: -81.5214}, radius: 7150}),
    new google.maps.Circle({center: {lat: 34.7254, lng: -92.3586}, radius: 9892}),
    new google.maps.Circle({center: {lat: 33.3884, lng: -111.9318}, radius: 5743}),
    new google.maps.Circle({center: {lat: 32.5102, lng: -84.8749}, radius: 13357}),
    new google.maps.Circle({center: {lat: 38.889, lng: -94.6906}, radius: 7868}),
    new google.maps.Circle({center: {lat: 32.6869, lng: -97.0211}, radius: 7721}),
    new google.maps.Circle({center: {lat: 30.4551, lng: -84.2534}, radius: 9097}),
    new google.maps.Circle({center: {lat: 26.6432, lng: -81.9974}, radius: 9330}),
    new google.maps.Circle({center: {lat: 30.6684, lng: -88.1002}, radius: 10720}),
    new google.maps.Circle({center: {lat: 35.9707, lng: -83.9493}, radius: 9011}),
    new google.maps.Circle({center: {lat: 32.4669, lng: -93.7922}, radius: 9397}),
    new google.maps.Circle({center: {lat: 42.2695, lng: -71.8078}, radius: 5554}),
    new google.maps.Circle({center: {lat: 34.0394, lng: -117.6042}, radius: 6413}),
    new google.maps.Circle({center: {lat: 45.6349, lng: -122.5957}, radius: 6219}),
    new google.maps.Circle({center: {lat: 43.5383, lng: -96.732}, radius: 7885}),
    new google.maps.Circle({center: {lat: 35.066, lng: -85.2484}, radius: 10861}),
    new google.maps.Circle({center: {lat: 25.9991, lng: -97.455}, radius: 10452}),
    new google.maps.Circle({center: {lat: 26.1412, lng: -80.1467}, radius: 5340}),
    new google.maps.Circle({center: {lat: 41.8231, lng: -71.4188}, radius: 3897}),
    new google.maps.Circle({center: {lat: 37.0762, lng: -76.522}, radius: 7548}),
    new google.maps.Circle({center: {lat: 34.1233, lng: -117.5642}, radius: 5743}),
    new google.maps.Circle({center: {lat: 38.4468, lng: -122.7061}, radius: 5836}),
    new google.maps.Circle({center: {lat: 33.7862, lng: -112.308}, radius: 12036}),
    new google.maps.Circle({center: {lat: 33.2245, lng: -117.3062}, radius: 5836}),
    new google.maps.Circle({center: {lat: 38.4146, lng: -121.385}, radius: 5898}),
    new google.maps.Circle({center: {lat: 44.9237, lng: -123.0232}, radius: 6330}),
    new google.maps.Circle({center: {lat: 26.021, lng: -80.3404}, radius: 5217}),
    new google.maps.Circle({center: {lat: 44.0567, lng: -123.1162}, radius: 6029}),
    new google.maps.Circle({center: {lat: 33.7788, lng: -117.9605}, radius: 3851}),
    new google.maps.Circle({center: {lat: 35.7809, lng: -78.8133}, radius: 6824}),
    new google.maps.Circle({center: {lat: 40.5482, lng: -105.0648}, radius: 6782}),
    new google.maps.Circle({center: {lat: 33.862, lng: -117.5655}, radius: 5706}),
    new google.maps.Circle({center: {lat: 37.1942, lng: -93.2913}, radius: 8238}),
    new google.maps.Circle({center: {lat: 32.3158, lng: -90.2128}, radius: 9566}),
    new google.maps.Circle({center: {lat: 38.8201, lng: -77.0841}, radius: 3514}),
    new google.maps.Circle({center: {lat: 37.6287, lng: -122.1024}, radius: 6123}),
    new google.maps.Circle({center: {lat: 36.5664, lng: -87.3452}, radius: 9002}),
    new google.maps.Circle({center: {lat: 39.6989, lng: -105.1176}, radius: 5947}),
    new google.maps.Circle({center: {lat: 34.6936, lng: -118.1753}, radius: 8817}),
    new google.maps.Circle({center: {lat: 36.6902, lng: -121.6337}, radius: 4410}),
    new google.maps.Circle({center: {lat: 34.591, lng: -118.1054}, radius: 9348}),
    new google.maps.Circle({center: {lat: 26.031, lng: -80.1646}, radius: 4744}),
    new google.maps.Circle({center: {lat: 42.1155, lng: -72.54}, radius: 5128}),
    new google.maps.Circle({center: {lat: 32.8088, lng: -83.6942}, radius: 14336}),
    new google.maps.Circle({center: {lat: 39.1225, lng: -94.7418}, radius: 10143}),
    new google.maps.Circle({center: {lat: 37.3858, lng: -122.0263}, radius: 4260}),
    new google.maps.Circle({center: {lat: 34.0585, lng: -117.7611}, radius: 4356}),
    new google.maps.Circle({center: {lat: 31.0777, lng: -97.732}, radius: 6642}),
    new google.maps.Circle({center: {lat: 33.1331, lng: -117.074}, radius: 5531}),
    new google.maps.Circle({center: {lat: 29.6586, lng: -95.1506}, radius: 5989}),
    new google.maps.Circle({center: {lat: 41.7492, lng: -88.162}, radius: 5648}),
    new google.maps.Circle({center: {lat: 47.5979, lng: -122.1565}, radius: 5256}),
    new google.maps.Circle({center: {lat: 41.5177, lng: -88.1488}, radius: 7287}),
    new google.maps.Circle({center: {lat: 35.8522, lng: -86.416}, radius: 6789}),
    new google.maps.Circle({center: {lat: 32.0246, lng: -102.1135}, radius: 7832}),
    new google.maps.Circle({center: {lat: 42.2588, lng: -89.0646}, radius: 7236}),
    new google.maps.Circle({center: {lat: 40.9148, lng: -74.1628}, radius: 2634}),
    new google.maps.Circle({center: {lat: 32.0025, lng: -81.1536}, radius: 9241}),
    new google.maps.Circle({center: {lat: 41.1874, lng: -73.1958}, radius: 3643}),
    new google.maps.Circle({center: {lat: 33.835, lng: -118.3414}, radius: 4111}),
    new google.maps.Circle({center: {lat: 26.2322, lng: -98.2464}, radius: 6940}),
    new google.maps.Circle({center: {lat: 43.041, lng: -76.1436}, radius: 4538}),
    new google.maps.Circle({center: {lat: 33.6706, lng: -112.4527}, radius: 9432}),
    new google.maps.Circle({center: {lat: 33.2166, lng: -97.1414}, radius: 8775}),
    new google.maps.Circle({center: {lat: 38.769, lng: -121.3189}, radius: 5955}),
    new google.maps.Circle({center: {lat: 39.9194, lng: -104.9428}, radius: 5426}),
    new google.maps.Circle({center: {lat: 25.977, lng: -80.3358}, radius: 4922}),
    new google.maps.Circle({center: {lat: 34.1606, lng: -118.1396}, radius: 4356}),
    new google.maps.Circle({center: {lat: 32.7629, lng: -96.5888}, radius: 6237}),
    new google.maps.Circle({center: {lat: 38.8843, lng: -94.8195}, radius: 7085}),
    new google.maps.Circle({center: {lat: 39.7774, lng: -84.1996}, radius: 6777}),
    new google.maps.Circle({center: {lat: 32.9884, lng: -96.8998}, radius: 5470}),
    new google.maps.Circle({center: {lat: 31.5601, lng: -97.186}, radius: 8566}),
    new google.maps.Circle({center: {lat: 33.787, lng: -117.8613}, radius: 4577}),
    new google.maps.Circle({center: {lat: 33.8857, lng: -117.928}, radius: 4297}),
    new google.maps.Circle({center: {lat: 32.8179, lng: -79.959}, radius: 9479}),
    new google.maps.Circle({center: {lat: 40.6885, lng: -112.0118}, radius: 5409}),
    new google.maps.Circle({center: {lat: 36.3273, lng: -119.3289}, radius: 5559}),
    new google.maps.Circle({center: {lat: 37.048, lng: -76.2971}, radius: 6516}),
    new google.maps.Circle({center: {lat: 29.6788, lng: -82.3461}, radius: 7168}),
    new google.maps.Circle({center: {lat: 42.4929, lng: -83.025}, radius: 5326}),
    new google.maps.Circle({center: {lat: 26.2707, lng: -80.2593}, radius: 4428}),
    new google.maps.Circle({center: {lat: 41.967, lng: -91.6778}, radius: 7641}),
    new google.maps.Circle({center: {lat: 30.5252, lng: -97.666}, radius: 5417}),
    new google.maps.Circle({center: {lat: 42.5812, lng: -83.0303}, radius: 5485}),
    new google.maps.Circle({center: {lat: 47.388, lng: -122.2127}, radius: 5271}),
    new google.maps.Circle({center: {lat: 34.0291, lng: -80.898}, radius: 10491}),
    new google.maps.Circle({center: {lat: 37.3646, lng: -121.9679}, radius: 3897}),
    new google.maps.Circle({center: {lat: 41.3108, lng: -72.925}, radius: 3925}),
    new google.maps.Circle({center: {lat: 41.0799, lng: -73.546}, radius: 5568}),
    new google.maps.Circle({center: {lat: 37.9722, lng: -122.0016}, radius: 5015}),
    new google.maps.Circle({center: {lat: 40.6664, lng: -74.1935}, radius: 3187}),
    new google.maps.Circle({center: {lat: 33.9496, lng: -83.3701}, radius: 9796}),
    new google.maps.Circle({center: {lat: 34.1933, lng: -118.8742}, radius: 6747}),
    new google.maps.Circle({center: {lat: 30.2074, lng: -92.0285}, radius: 6659}),
    new google.maps.Circle({center: {lat: 34.2669, lng: -118.7485}, radius: 5850}),
    new google.maps.Circle({center: {lat: 39.0347, lng: -95.6962}, radius: 7121}),
    new google.maps.Circle({center: {lat: 35.2406, lng: -97.3453}, radius: 12141}),
    new google.maps.Circle({center: {lat: 46.8652, lng: -96.829}, radius: 6376}),
    new google.maps.Circle({center: {lat: 34.2092, lng: -77.8858}, radius: 6521}),
    new google.maps.Circle({center: {lat: 32.4545, lng: -99.7381}, radius: 9380}),
    new google.maps.Circle({center: {lat: 31.8838, lng: -102.3411}, radius: 6105}),
    new google.maps.Circle({center: {lat: 38.9515, lng: -92.3286}, radius: 7319}),
    new google.maps.Circle({center: {lat: 29.5558, lng: -95.3231}, radius: 6178}),
    new google.maps.Circle({center: {lat: 34.5277, lng: -117.3536}, radius: 7773}),
    new google.maps.Circle({center: {lat: 41.7659, lng: -72.6816}, radius: 3789}),
    new google.maps.Circle({center: {lat: 38.1079, lng: -122.264}, radius: 5030}),
    new google.maps.Circle({center: {lat: 40.5936, lng: -75.4784}, radius: 3797}),
    new google.maps.Circle({center: {lat: 37.867, lng: -122.2991}, radius: 2942}),
    new google.maps.Circle({center: {lat: 32.9723, lng: -96.7081}, radius: 4857}),
    new google.maps.Circle({center: {lat: 39.8337, lng: -105.1503}, radius: 5642}),
    new google.maps.Circle({center: {lat: 42.2761, lng: -83.7309}, radius: 4814}),
    new google.maps.Circle({center: {lat: 44.0154, lng: -92.4772}, radius: 6709}),
    new google.maps.Circle({center: {lat: 42.376, lng: -71.1187}, radius: 2299}),
    new google.maps.Circle({center: {lat: 29.5994, lng: -95.6142}, radius: 5296}),
    new google.maps.Circle({center: {lat: 42.7143, lng: -84.5593}, radius: 5678}),
    new google.maps.Circle({center: {lat: 37.9877, lng: -87.5347}, radius: 6244}),
    new google.maps.Circle({center: {lat: 30.5852, lng: -96.2964}, radius: 6484}),
    new google.maps.Circle({center: {lat: 38.2593, lng: -122.0321}, radius: 5806}),
    new google.maps.Circle({center: {lat: 27.9789, lng: -82.7666}, radius: 4622}),
    new google.maps.Circle({center: {lat: 30.0849, lng: -94.1453}, radius: 8226}),
    new google.maps.Circle({center: {lat: 39.0855, lng: -94.3521}, radius: 8009}),
    new google.maps.Circle({center: {lat: 40.2453, lng: -111.6448}, radius: 5863}),
    new google.maps.Circle({center: {lat: 40.6024, lng: -112.0008}, radius: 5162}),
    new google.maps.Circle({center: {lat: 33.5721, lng: -117.1904}, radius: 5262}),
    new google.maps.Circle({center: {lat: 27.9856, lng: -80.6626}, radius: 7360}),
    new google.maps.Circle({center: {lat: 34.0746, lng: -118.0291}, radius: 2815}),
    new google.maps.Circle({center: {lat: 33.1239, lng: -117.2828}, radius: 5574}),
    new google.maps.Circle({center: {lat: 32.9178, lng: -80.065}, radius: 7795}),
    new google.maps.Circle({center: {lat: 33.4931, lng: -117.1317}, radius: 5545}),
    new google.maps.Circle({center: {lat: 36.8282, lng: -119.6849}, radius: 4467}),
    new google.maps.Circle({center: {lat: 39.7911, lng: -89.6446}, radius: 7040}),
    new google.maps.Circle({center: {lat: 43.6142, lng: -116.3989}, radius: 4957}),
    new google.maps.Circle({center: {lat: 39.8822, lng: -105.0644}, radius: 5112}),
    new google.maps.Circle({center: {lat: 33.6659, lng: -117.9123}, radius: 3599}),
    new google.maps.Circle({center: {lat: 35.99, lng: -79.9905}, radius: 6747}),
    new google.maps.Circle({center: {lat: 42.9849, lng: -71.4441}, radius: 5223}),
    new google.maps.Circle({center: {lat: 38.2699, lng: -104.6123}, radius: 6647}),
    new google.maps.Circle({center: {lat: 28.0555, lng: -81.9549}, radius: 7371}),
    new google.maps.Circle({center: {lat: 26.2416, lng: -80.1339}, radius: 4450}),
    new google.maps.Circle({center: {lat: 26.7464, lng: -80.1251}, radius: 6740}),
    new google.maps.Circle({center: {lat: 37.9791, lng: -121.7962}, radius: 4922}),
    new google.maps.Circle({center: {lat: 47.9566, lng: -122.1914}, radius: 5238}),
    new google.maps.Circle({center: {lat: 33.9382, lng: -118.1309}, radius: 3197}),
    new google.maps.Circle({center: {lat: 42.639, lng: -71.3211}, radius: 3347}),
    new google.maps.Circle({center: {lat: 39.5906, lng: -104.8691}, radius: 4931}),
    new google.maps.Circle({center: {lat: 42.0396, lng: -88.3217}, radius: 5554}),
    new google.maps.Circle({center: {lat: 37.9523, lng: -122.3606}, radius: 4983}),
    new google.maps.Circle({center: {lat: 40.7515, lng: -89.6174}, radius: 6303}),
    new google.maps.Circle({center: {lat: 36.0365, lng: -95.781}, radius: 7132}),
    new google.maps.Circle({center: {lat: 25.9489, lng: -80.2436}, radius: 3872}),
    new google.maps.Circle({center: {lat: 45.7885, lng: -108.5499}, radius: 6003}),
    new google.maps.Circle({center: {lat: 34.0026, lng: -117.4676}, radius: 5947}),
    new google.maps.Circle({center: {lat: 33.9315, lng: -84.3687}, radius: 5574}),
    new google.maps.Circle({center: {lat: 45.5023, lng: -122.4416}, radius: 4381}),
    new google.maps.Circle({center: {lat: 33.0466, lng: -96.9818}, radius: 5502}),
    new google.maps.Circle({center: {lat: 45.528, lng: -122.9357}, radius: 4538}),
    new google.maps.Circle({center: {lat: 34.2678, lng: -119.2542}, radius: 4241}),
    new google.maps.Circle({center: {lat: 40.4153, lng: -104.7697}, radius: 6277}),
    new google.maps.Circle({center: {lat: 33.9561, lng: -118.3443}, radius: 2741}),
    new google.maps.Circle({center: {lat: 41.5585, lng: -73.0367}, radius: 4847}),
    new google.maps.Circle({center: {lat: 29.4901, lng: -95.1091}, radius: 6497}),
    new google.maps.Circle({center: {lat: 34.9332, lng: -120.4438}, radius: 4337}),
    new google.maps.Circle({center: {lat: 32.3173, lng: -95.3059}, radius: 6831}),
    new google.maps.Circle({center: {lat: 26.0791, lng: -80.285}, radius: 5364}),
    new google.maps.Circle({center: {lat: 40.0771, lng: -74.2004}, radius: 4514}),
    new google.maps.Circle({center: {lat: 37.7009, lng: -122.465}, radius: 2504}),
    new google.maps.Circle({center: {lat: 40.027, lng: -105.2519}, radius: 4521}),
    new google.maps.Circle({center: {lat: 33.0997, lng: -96.6631}, radius: 4727}),
    new google.maps.Circle({center: {lat: 34.0559, lng: -117.9099}, radius: 3630}),
    new google.maps.Circle({center: {lat: 39.5544, lng: -119.7356}, radius: 5441}),
    new google.maps.Circle({center: {lat: 33.9067, lng: -98.5259}, radius: 7715}),
    new google.maps.Circle({center: {lat: 44.5207, lng: -87.9842}, radius: 6118}),
    new google.maps.Circle({center: {lat: 37.5603, lng: -122.3106}, radius: 3156}),
    new google.maps.Circle({center: {lat: 33.9076, lng: -118.0835}, radius: 2827}),
    new google.maps.Circle({center: {lat: 34.1118, lng: -117.3883}, radius: 4289}),
    new google.maps.Circle({center: {lat: 32.3264, lng: -106.7897}, radius: 7963}),
    new google.maps.Circle({center: {lat: 39.74, lng: -121.8356}, radius: 5238}),
    new google.maps.Circle({center: {lat: 32.8017, lng: -116.9604}, radius: 3460}),
    new google.maps.Circle({center: {lat: 34.1901, lng: -118.3264}, radius: 3789}),
    new google.maps.Circle({center: {lat: 41.6769, lng: -86.269}, radius: 5841}),
    new google.maps.Circle({center: {lat: 47.4761, lng: -122.192}, radius: 4392}),
    new google.maps.Circle({center: {lat: 33.1895, lng: -117.2386}, radius: 3925}),
    new google.maps.Circle({center: {lat: 41.5541, lng: -90.604}, radius: 7201}),
    new google.maps.Circle({center: {lat: 26.3042, lng: -98.1639}, radius: 5568}),
    new google.maps.Circle({center: {lat: 33.2065, lng: -87.5346}, radius: 7688}),
    new google.maps.Circle({center: {lat: 39.9667, lng: -86.1}, radius: 6257}),
    new google.maps.Circle({center: {lat: 47.6733, lng: -117.2394}, radius: 5574}),
    new google.maps.Circle({center: {lat: 31.4411, lng: -100.4505}, radius: 7026}),
    new google.maps.Circle({center: {lat: 38.3539, lng: -121.9728}, radius: 4889}),
    new google.maps.Circle({center: {lat: 42.5903, lng: -82.917}, radius: 4814}),
    new google.maps.Circle({center: {lat: 44.05, lng: -121.3}, radius: 5223}),
    new google.maps.Circle({center: {lat: 40.5607, lng: -74.2927}, radius: 4381}),
  ],
}
