// Fetch lanes data from our Glitch project
var vzv_tcst = fetch('https://data.cityofnewyork.us/resource/hiik-hmf3.geojson')
  .then(function (response) {
    // Read data as JSON
    return response.json();
  });



// Once both have loaded, do some work with them
Promise.all([vzv_tcst])
  .then(function (fetchedData) {
    console.log('Both datasets have loaded');
    // Unpack the data from the Promise
	var vzv_tcst = fetchedData[1];

  
  

// get color depending on population density value
function getColor(d) {
return d > 80  ? '#084594' :
	   d > 40  ? '#2171b5' :
	   d > 20  ? '#4292c6' :
	   d > 10  ? '#6baed6' :
	   d > 5  ? '#9ecae1' :
	   d > 2.5   ? '#c6dbef' :
	   d > 0   ? '#deebf7' :
				  '#ffffff';
}



function getColor_maj(d) {
        return d === 'Speak only English'  ? "#8dd3c7" :
		       d === 'Spanish or Spanish Creole'  ? '#ffffb3' :
			   d === 'French incl Patois Cajun'  ? '#bebada' :
			   d === 'French Creole'  ? '#fb8072' :
			   //d === 'Other Native North American languages'  ? '#33a02c' :
			   //d === 'Hungarian'  ? '#33a02c' :
			   d === 'Arabic'  ? '#80b1d3' :
			   //d === 'Hebrew'  ? '#33a02c' :
			   d === 'African languages'  ? '#fdb462' :
			   //d === 'Other and unspecified languages'  ? '#33a02c' :
			   d === 'Italian'  ? '#b3de69' :
			   d === 'Portuguese or Portuguese Creole'  ? '#fccde5' :
			   d === 'German'  ? '#d9d9d9' :
			   //d === 'Yiddish'  ? '#33a02c' :
			   //d === 'Other West Germanic languages'  ? '#33a02c' :
			   //d === 'Scandinavian languages'  ? '#33a02c' :
			   //d === 'Greek'  ? '#33a02c' :
			   //d === 'Russian'  ? '#33a02c' :
			   //d === 'Polish'  ? '#33a02c' :
			   //d === 'Serbo-Croatian'  ? '#33a02c' :
			   //d === 'Other Slavic languages'  ? '#33a02c' :
			   //d === 'Armenian'  ? '#33a02c' :
			   d === 'Persian'  ? '#bc80bd' :
			   d === 'Gujarati'  ? '#ccebc5' :
			   d === 'Hindi'  ? '#ffed6f' :
			   d === 'Urdu'  ? '#fdbf6f' :
			   d === 'Other Indic languages'  ? '#ffff99' :
			   //d === 'Other Indo-European languages'  ? '#33a02c' :
			   d === 'Chinese'  ? '#b2df8a' :
			   d === 'Japanese'  ? '#fb9a99' :
			   d === 'Korean'  ? '#fdbf6f' :
			   //d === 'Mon-Khmer Cambodian'  ? '#33a02c' :
			   //d === 'Hmong'  ? '#33a02c' :
			   //d === 'Thai'  ? '#33a02c' :
			   //d === 'Laotian'  ? '#33a02c' :
			   d === 'Vietnamese'  ? '#cab2d6' :
			   d === 'Other Asian languages'  ? '#1f78b4' :
			   d === 'Tagalog'  ? '#6a3d9a' :
			   //d === 'Other Pacific Island languages'  ? '#33a02c' :
			   //d === 'Navajo'  ? '#33a02c' :
                            "#ffffff";
    }











///////////////////////////////////////////////////////////////////////////////////
    function style_Majority(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_maj(feature.properties.ACS_Majority),
		fillOpacity: .7,
 		fillColor: getColor_maj(feature.properties.ACS_Majority),
      };
    }
    Majority = L.geoJson(ACS_B161001_LE, {
      style: style_Majority,
    });
// Add popups to the layer
Majority.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Majority, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
    function style_Majority_woE(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_maj(feature.properties.ACS_Majority_woE),
		fillOpacity: .7,
 		fillColor: getColor_maj(feature.properties.ACS_Majority_woE),
      };
    }
    Majority_woE = L.geoJson(ACS_B161001_LE, {
      style: style_Majority_woE,
    });
// Add popups to the layer
Majority_woE.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Majority_woE, layer.feature.properties);
});
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
    function style_Majority_woES(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor_maj(feature.properties.ACS_Majority_woES),
		fillOpacity: .7,
 		fillColor: getColor_maj(feature.properties.ACS_Majority_woES),
      };
    }
    Majority_woES = L.geoJson(ACS_B161001_LE, {
      style: style_Majority_woES,
    });
// Add popups to the layer
Majority_woES.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Majority_woES, layer.feature.properties);
});		
///////////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////////
var English;

    function style_English(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Speak_only_English_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Speak_only_English_P),
      };
    }
    English = L.geoJson(ACS_B161001_LE, {
      style: style_English,
	  interactive: false,
    });
// Add popups to the layer
English.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_English, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Spanish;

    function style_Spanish(feature) {
      return {
        weight: 1,
        opacity: .5,
        color: getColor(feature.properties.ACS_Spanish_or_Spanish_Creole_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Spanish_or_Spanish_Creole_P),
      };
    }
    Spanish = L.geoJson(ACS_B161001_LE, {
      style: style_Spanish,
	  interactive: false,
    });
// Add popups to the layer
Spanish.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Spanish, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var French;

    function style_French(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_French_incl_Patois_Cajun_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_French_incl_Patois_Cajun_P),
      };
    }
    French = L.geoJson(ACS_B161001_LE, {
      style: style_French,
	  interactive: false,
    });
// Add popups to the layer
French.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_French, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var French_C;

    function style_French_C(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_French_Creole_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_French_Creole_P),
      };
    }
    French_C = L.geoJson(ACS_B161001_LE, {
      style: style_French_C,
	  interactive: false,
    });
// Add popups to the layer
French_C.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_French_C, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Native;

    function style_Native(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_Native_North_American_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_Native_North_American_languages_P),
      };
    }
    Native = L.geoJson(ACS_B161001_LE, {
      style: style_Native,
	  interactive: false,
    });
// Add popups to the layer
Native.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Native, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Hungarian;

    function style_Hungarian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.Hungarian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.Hungarian_P),
      };
    }
    Hungarian = L.geoJson(ACS_B161001_LE, {
      style: style_Hungarian,
	  interactive: false,
    });
// Add popups to the layer
Hungarian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hungarian, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Arabic;

    function style_Arabic(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Arabic_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Arabic_P),
      };
    }
    Arabic = L.geoJson(ACS_B161001_LE, {
      style: style_Arabic,
	  interactive: false,
    });
// Add popups to the layer
Arabic.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Arabic, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Hebrew;

    function style_Hebrew(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Hebrew_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Hebrew_P),
      };
    }
    Hebrew = L.geoJson(ACS_B161001_LE, {
      style: style_Hebrew,
	  interactive: false,
    });
// Add popups to the layer
Hebrew.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hebrew, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var African;

    function style_African(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_African_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_African_languages_P),
      };
    }
    African = L.geoJson(ACS_B161001_LE, {
      style: style_African,
	  interactive: false,
    });
// Add popups to the layer
African.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_African, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other;

    function style_Other(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_and_unspecified_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_and_unspecified_languages_P),
      };
    }
    Other = L.geoJson(ACS_B161001_LE, {
      style: style_Other,
	  interactive: false,
    });
// Add popups to the layer
Other.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Italian;

    function style_Italian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Italian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Italian_P),
      };
    }
    Italian = L.geoJson(ACS_B161001_LE, {
      style: style_Italian,
	  interactive: false,
    });
// Add popups to the layer
Italian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Italian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Portuguese;

    function style_Portuguese(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Portuguese_or_Portuguese_Creole_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Portuguese_or_Portuguese_Creole_P),
      };
    }
    Portuguese = L.geoJson(ACS_B161001_LE, {
      style: style_Portuguese,
	  interactive: false,
    });
// Add popups to the layer
Portuguese.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Portuguese, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var German;

    function style_German(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_German_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_German_P),
      };
    }
    German = L.geoJson(ACS_B161001_LE, {
      style: style_German,
	  interactive: false,
    });
// Add popups to the layer
German.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_German, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Yiddish;

    function style_Yiddish(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Yiddish_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Yiddish_P),
      };
    }
    Yiddish = L.geoJson(ACS_B161001_LE, {
      style: style_Yiddish,
	  interactive: false,
    });
// Add popups to the layer
Yiddish.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Yiddish, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other_West;

    function style_Other_West(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_West_Germanic_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_West_Germanic_languages_P),
      };
    }
    Other_West = L.geoJson(ACS_B161001_LE, {
      style: style_Other_West,
	  interactive: false,
    });
// Add popups to the layer
Other_West.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_West, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Scandanavian;

    function style_Scandanavian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Scandinavian_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Scandinavian_languages_P),
      };
    }
    Scandanavian = L.geoJson(ACS_B161001_LE, {
      style: style_Scandanavian,
	  interactive: false,
    });
// Add popups to the layer
Scandanavian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Scandanavian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Greek;

    function style_Greek(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Greek_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Greek_P),
      };
    }
    Greek = L.geoJson(ACS_B161001_LE, {
      style: style_Greek,
	  interactive: false,
    });
// Add popups to the layer
Greek.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Greek, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Russian;

    function style_Russian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Russian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Russian_P),
      };
    }
    Russian = L.geoJson(ACS_B161001_LE, {
      style: style_Russian,
	  interactive: false,
    });
// Add popups to the layer
Russian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Russian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Polish;

    function style_Polish(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Polish_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Polish_P),
      };
    }
    Polish = L.geoJson(ACS_B161001_LE, {
      style: style_Polish,
	  interactive: false,
    });
// Add popups to the layer
Polish.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Polish, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Serbo;

    function style_Serbo(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor('feature.properties.ACS_Serbo-Croatian_P'),
        fillOpacity: .7,
 		fillColor: getColor('feature.properties.ACS_Serbo-Croatian_P'),
      };
    }
    Serbo = L.geoJson(ACS_B161001_LE, {
      style: style_Serbo,
	  interactive: false,
    });
// Add popups to the layer
Serbo.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Serbo, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other_Slav;

    function style_Other_Slav(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_Slavic_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_Slavic_languages_P),
      };
    }
    Other_Slav = L.geoJson(ACS_B161001_LE, {
      style: style_Other_Slav,
	  interactive: false,
    });
// Add popups to the layer
Other_Slav.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_Slav, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Armenian;

    function style_Armenian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Armenian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Armenian_P),
      };
    }
    Armenian = L.geoJson(ACS_B161001_LE, {
      style: style_Armenian,
	  interactive: false,
    });
// Add popups to the layer
Armenian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Armenian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Persian;

    function style_Persian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Persian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Persian_P),
      };
    }
    Persian = L.geoJson(ACS_B161001_LE, {
      style: style_Persian,
	  interactive: false,
    });
// Add popups to the layer
Persian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Persian, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Gujarati;

    function style_Gujarati(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Gujarati_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Gujarati_P),
      };
    }
    Gujarati = L.geoJson(ACS_B161001_LE, {
      style: style_Gujarati,
	  interactive: false,
    });
// Add popups to the layer
Gujarati.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Gujarati, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var Hindi;

    function style_Hindi(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Hindi_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Hindi_P),
      };
    }
    Hindi = L.geoJson(ACS_B161001_LE, {
      style: style_Hindi,
	  interactive: false,
    });
// Add popups to the layer
Hindi.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hindi, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var Urdu;

    function style_Urdu(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Urdu_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Urdu_P),
      };
    }
    Urdu = L.geoJson(ACS_B161001_LE, {
      style: style_Urdu,
	  interactive: false,
    });
// Add popups to the layer
Urdu.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Urdu, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var Other_Indic;

    function style_Other_Indic(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_Indic_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_Indic_languages_P),
      };
    }
    Other_Indic = L.geoJson(ACS_B161001_LE, {
      style: style_Other_Indic,
	  interactive: false,
    });
// Add popups to the layer
Other_Indic.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_Indic, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other_Indo;

    function style_Other_Indo(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor('feature.properties.ACS_Other_Indo-European_languages_P'),
        fillOpacity: .7,
 		fillColor: getColor('feature.properties.ACS_Other_Indo-European_languages_P'),
      };
    }
    Other_Indo = L.geoJson(ACS_B161001_LE, {
      style: style_Other_Indo,
	  interactive: false,
    });
// Add popups to the layer
Other_Indo.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_Indo, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Chinese;

    function style_Chinese(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Chinese_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Chinese_P),
      };
    }
    Chinese = L.geoJson(ACS_B161001_LE, {
      style: style_Chinese,
	  interactive: false,
    });
// Add popups to the layer
Chinese.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Chinese, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var Japanese;

    function style_Japanese(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Japanese_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Japanese_P),
      };
    }
    Japanese = L.geoJson(ACS_B161001_LE, {
      style: style_Japanese,
	  interactive: false,
    });
// Add popups to the layer
Japanese.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Japanese, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Korean;

    function style_Korean(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Korean_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Korean_P),
      };
    }
    Korean = L.geoJson(ACS_B161001_LE, {
      style: style_Korean,
	  interactive: false,
    });
// Add popups to the layer
Korean.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Korean, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var MonKhmer;

    function style_MonKhmer(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor('feature.properties.ACS_Mon-Khmer_Cambodian_P'),
        fillOpacity: .7,
 		fillColor: getColor('feature.properties.ACS_Mon-Khmer_Cambodian_P'),
      };
    }
    MonKhmer = L.geoJson(ACS_B161001_LE, {
      style: style_MonKhmer,
	  interactive: false,
    });
// Add popups to the layer
MonKhmer.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_MonKhmer, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Hmong;

    function style_Hmong(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Hmong_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Hmong_P),
      };
    }
    Hmong = L.geoJson(ACS_B161001_LE, {
      style: style_Hmong,
	  interactive: false,
    });
// Add popups to the layer
Hmong.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Hmong, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Thai;

    function style_Thai(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Thai_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Thai_P),
      };
    }
    Thai = L.geoJson(ACS_B161001_LE, {
      style: style_Thai,
	  interactive: false,
    });
// Add popups to the layer
Thai.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Thai, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Laotian;

    function style_Laotian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Laotian_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Laotian_P),
      };
    }
    Laotian = L.geoJson(ACS_B161001_LE, {
      style: style_Laotian,
	  interactive: false,
    });
// Add popups to the layer
Laotian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Laotian, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Vietnamese;

    function style_Vietnamese(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Vietnamese_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Vietnamese_P),
      };
    }
    Vietnamese = L.geoJson(ACS_B161001_LE, {
      style: style_Vietnamese,
	  interactive: false,
    });
// Add popups to the layer
Vietnamese.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Vietnamese, layer.feature.properties);
});	
///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other_Asian;

    function style_Other_Asian(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_Asian_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_Asian_languages_P),
      };
    }
    Other_Asian = L.geoJson(ACS_B161001_LE, {
      style: style_Other_Asian,
	  interactive: false,
    });
// Add popups to the layer
Other_Asian.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_Asian, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////


/*//////////////////////////////////////////////////////////////////////////////////
var Tagalog;

    function style_Tagalog(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Tagalog_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Tagalog_P),
      };
    }
    Tagalog = L.geoJson(ACS_B161001_LE, {
      style: style_Tagalog,
	  interactive: false,
    });
// Add popups to the layer
Tagalog.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Tagalog, layer.feature.properties);
});	


/*//////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Other_Pacific;

    function style_Other_Pacific(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Other_Pacific_Island_languages_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Other_Pacific_Island_languages_P),
      };
    }
    Other_Pacific = L.geoJson(ACS_B161001_LE, {
      style: style_Other_Pacific,
	  interactive: false,
    });
// Add popups to the layer
Other_Pacific.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Other_Pacific, layer.feature.properties);
});	


///////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////
var Navajo;

    function style_Navajo(feature) {
      return {
        weight: 1,
        opacity: .25,
        color: getColor(feature.properties.ACS_Navajo_P),
        fillOpacity: .7,
 		fillColor: getColor(feature.properties.ACS_Navajo_P),
      };
    }
    Navajo = L.geoJson(ACS_B161001_LE, {
      style: style_Navajo,
	  interactive: false,
    });
// Add popups to the layer
Navajo.bindPopup(function (layer) {
// This function is called whenever a feature on the layer is clicked
console.log(layer.feature.properties);

// Render the template with all of the properties. Mustache ignores properties
// that aren't used in the template, so this is fine.
return Mustache.render(popupTemplate_Navajo, layer.feature.properties);
});	
/*//////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



var mapOptions = {
	zoomControl: false, 
	attributionControl: false, 
	center: [29.74,  -95.46],
	zoom: 11,
	minZoom: 9,
	maxZoom: 19,
};


var map = L.map('map', mapOptions);
map.createPane('labels');
map.getPane('labels').style.zIndex = 650;
map.getPane('labels').style.pointerEvents = 'none';

var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB'
}).addTo(map);

var positronLabels = L.tileLayer('https://api.mapbox.com/styles/v1/jaramana/ck7z43nef12h71in0o7l0mvrh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFyYW1hbmEiLCJhIjoiY2pzeGx0b2R1MDNuajN5cDVtemprcjhyaCJ9.m04uOZABAigD1SL9vbUJvw', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels'
}).addTo(map);

Majority.addTo(map);



L.control.zoom({
     position:'topright'
}).addTo(map);



var legend = L.control({ position: "bottomright" });
legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
		labels_title = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Percent Spoken</h6>'],
		grades = [100, 80, 40, 20, 10, 5, 2.5, 0],
        labels = ["80% +", "40% - 80%", "20% - 40%", "10% - 20%", "5% - 10%", "2.5% - 5%", ".01% - 2.5%", "0%"]
		;
		
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            labels_title.push(
            '<i style="background:' + getColor(grades[i]) + '"></i> ' +
            (labels[i] ? labels[i] + '<br>' : '+'));
        div.innerHTML = labels_title.join('');
    }
    return div;
};



var legend_Majority = L.control({position: 'bottomright'});
    legend_Majority.onAdd = function (map) {

var div_Majority = L.DomUtil.create('div', 'info legend');
    labels_Majority = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Spoken by Majority</h6>'],
    categories_Majority = ['Speak only English',
					  'Spanish or Spanish Creole',
					  //'French incl Patois Cajun',
					  //'French Creole',
					  //"Other Native North American languages",
					  //"Hungarian",
					  //"Arabic",
					  //"Hebrew",
					  //"African languages",
					  //"Other and unspecified languages",
					  //'Italian',
					  //'Portuguese',
					  //'German',
					  //'Yiddish',
					  //'Other West Germanic languages',
					  //'Scandanavian',
					  //'Greek',
					  //'Russian',
					  //'Polish',
					  //'Serbo-Croatian',
					  //'Other Slavic languages',
					  //'Armenian',
					  //'Persian',
					  //'Gujarati',
					  //'Hindi',
					  //'Urdu',
					  //'Other Indic languages',
					  //'Other Indo-European languages',
					  //'Chinese',
					  //'Japanese',
					  //'Korean',
					  //'Mon-Khmer Cambodian',
					  //'Hmong',
					  //'Thai',
					  //'Laotian',
					  //'Vietnamese',
					  'Other Asian languages',
					  //'Tagalog',
					  //'Other Pacific Island languages',
					  //'Navajo'
					  'Other'
					  ];
    for (var i = 0; i < categories_Majority.length; i++) {
            div_Majority.innerHTML += 
            labels_Majority.push(
                '<i style="background:' + getColor_maj(categories_Majority[i]) + '"></i> ' +
                (categories_Majority[i] ? categories_Majority[i] + '<br>' : '+'));
        }
        div_Majority.innerHTML = labels_Majority.join('');
    return div_Majority;
};





var legend_Majority_woE = L.control({position: 'bottomright'});
    legend_Majority_woE.onAdd = function (map) {

var div_Majority_woE = L.DomUtil.create('div', 'info legend');
    labels_Majority_woE = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Spoken by Majority</h6>'],
    categories_Majority_woE = ['Speak only English',
					  'Spanish or Spanish Creole',
					  'French incl Patois Cajun',
					  //'French Creole',
					  //"Other Native North American languages",
					  //"Hungarian",
					  "Arabic",
					  //"Hebrew",
					  "African languages",
					  //"Other and unspecified languages",
					  //'Italian',
					  //'Portuguese',
					  'German',
					  //'Yiddish',
					  //'Other West Germanic languages',
					  //'Scandanavian',
					  //'Greek',
					  //'Russian',
					  //'Polish',
					  //'Serbo-Croatian',
					  'Other Slavic languages',
					  //'Armenian',
					  'Persian',
					  'Gujarati',
					  'Hindi',
					  'Urdu',
					  'Other Indic languages',
					  //'Other Indo-European languages',
					  'Chinese',
					  'Japanese',
					  'Korean',
					  //'Mon-Khmer Cambodian',
					  //'Hmong',
					  //'Thai',
					  //'Laotian',
					  'Vietnamese',
					  'Other Asian languages',
					  'Tagalog',
					  //'Other Pacific Island languages',
					  //'Navajo'
					  'Other'
					  ];
    for (var i = 0; i < categories_Majority_woE.length; i++) {
            div_Majority_woE.innerHTML += 
            labels_Majority_woE.push(
                '<i style="background:' + getColor_maj(categories_Majority_woE[i]) + '"></i> ' +
                (categories_Majority_woE[i] ? categories_Majority_woE[i] + '<br>' : '+'));
        }
        div_Majority_woE.innerHTML = labels_Majority_woE.join('');
    return div_Majority_woE;
};





var legend_Majority_woES = L.control({position: 'bottomright'});
    legend_Majority_woES.onAdd = function (map) {

var div_Majority_woES = L.DomUtil.create('div', 'info legend');
    labels_Majority_woES = ['<h6 style="text-align:center;font-size:14px;font-weight: bold;">Spoken by Majority</h6>'],
    categories_Majority_woES = ['Speak only English',
					  'Spanish or Spanish Creole',
					  'French incl Patois Cajun',
					  'French Creole',
					  //"Other Native North American languages",
					  //"Hungarian",
					  "Arabic",
					  //"Hebrew",
					  "African languages",
					  //"Other and unspecified languages",
					  'Italian',
					  'Portuguese',
					  'German',
					  //'Yiddish',
					  //'Other West Germanic languages',
					  //'Scandanavian',
					  //'Greek',
					  //'Russian',
					  //'Polish',
					  //'Serbo-Croatian',
					  //'Other Slavic languages',
					  //'Armenian',
					  'Persian',
					  'Gujarati',
					  'Hindi',
					  'Urdu',
					  'Other Indic languages',
					  //'Other Indo-European languages',
					  'Chinese',
					  'Japanese',
					  'Korean',
					  //'Mon-Khmer Cambodian',
					  //'Hmong',
					  //'Thai',
					  //'Laotian',
					  'Vietnamese',
					  'Other Asian languages',
					  'Tagalog',
					  //'Other Pacific Island languages',
					  //'Navajo',
					  'Other'
					  ];
    for (var i = 0; i < categories_Majority_woES.length; i++) {
            div_Majority_woES.innerHTML += 
            labels_Majority_woES.push(
                '<i style="background:' + getColor_maj(categories_Majority_woES[i]) + '"></i> ' +
                (categories_Majority_woES[i] ? categories_Majority_woES[i] + '<br>' : '+'));
        }
        div_Majority_woES.innerHTML = labels_Majority_woES.join('');
    return div_Majority_woES;
};




legend_Majority.addTo(map);
currentLegend = legend_Majority;


map.on('baselayerchange', function (eventLayer) {
    if (eventLayer.name === 'Include All Languages') {
        map.removeControl(currentLegend );
        currentLegend = legend_Majority;
        legend_Majority.addTo(map);
    }
    else if  (eventLayer.name === 'Exclude English') {
        map.removeControl(currentLegend );
        currentLegend = legend_Majority_woE;
        legend_Majority_woE.addTo(map);		
    }
    else if  (eventLayer.name === 'Exclude English and Spanish') {
        map.removeControl(currentLegend );
        currentLegend = legend_Majority_woES;
        legend_Majority_woES.addTo(map);		
    }
    else {
        map.removeControl(currentLegend );
        currentLegend = legend;
        legend.addTo(map);	
    }
    }
  )
  
  

var overlays = {
	"Include All Languages": Majority,
	"Exclude English": Majority_woE,
	"Exclude English and Spanish": Majority_woES,
	"Speak only English": English,
	"Spanish or Spanish Creole": Spanish,
	"French, including Patois and Cajun": French,
	//"French Creole": French_C,
	//"Other Native North American languages": Native,
	//"Hungarian": Hungarian,
	"Arabic": Arabic,
	//"Hebrew": Hebrew,
	"African Languages": African,
	//"Other and unspecified languages": Other,
	//"Italian": Italian,
	//"Portuguese": Portuguese,
	"German": German,
	//"Yiddish": Yiddish,
	//"Other West Germanic languages": Other_West,
	//"Scandanavian": Scandanavian,
	//"Greek": Greek,
	//"Russian": Russian,
	//"Polish": Polish,
	//"Serbo-Croatian": Serbo,
	//"Other Slavic languages": Other_Slav,
	//"Armenian": Armenian,
	//"Persian": Persian,
	//"Gujarati": Gujarati,
	"Hindi": Hindi,
	"Urdu": Urdu,
	"Other Indic languages": Other_Indic,
	//"Other Indo-European languages": Other_Indo,
	"Chinese": Chinese,
	//"Japanese": Japanese,
	//"Korean": Korean,
	//"Mon-Khmer Cambodian": MonKhmer,
	//"Hmong": Hmong,
	//"Thai": Thai,
	//"Laotian": Laotian,
	"Vietnamese": Vietnamese,
	"Other Asian languages": Other_Asian,
	"Tagalog": Tagalog
	//"Other Pacific Island languages": Other_Pacific,
	//"Navajo": Navajo
};



 var sidebar = L.control.sidebar({
    autopan: false,       // whether to maintain the centered map point when opening the sidebar
    closeButton: true,    // whether t add a close button to the panes
    container: 'sidebar', // the DOM container or #ID of a predefined sidebar container that should be used
    position: 'left',     // left or right
}).addTo(map).open('home');

  

  
  
//Render Layer Control & Move to Sidebar
var layerControl = L.control.layers(overlays, null, {position: "topright",collapsed: false}).addTo(map);
var oldLayerControl = layerControl.getContainer();
var newLayerControl = $("#layercontrol");
newLayerControl.append(oldLayerControl);
//$(".leaflet-control-layers-list").before("<h6>Languages Spoken at Home</h6>");
  });



var popupTemplate_Majority = document.querySelector('.popupTemplate_Majority').innerHTML;
var popupTemplate_Majority_woE = document.querySelector('.popupTemplate_Majority_woE').innerHTML;
var popupTemplate_Majority_woES = document.querySelector('.popupTemplate_Majority_woES').innerHTML;