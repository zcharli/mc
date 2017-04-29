// Custom polygon object 
function Polygon(polygon) {

    var that= {};

    // Extract coordinates from google polygon object
    that.coordinates = (function(polygon) {
    	var coordinateArr = [];

    	for (var i = 0; i < polygon.getPath().getLength(); i++) {
            coordinateArr.push(polygon.getPath().getAt(i).toUrlValue(6));
      	}

      	return coordinateArr;
    })(polygon);

    return that;
}