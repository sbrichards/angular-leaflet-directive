EsriLeaflet.Controls.Logo = L.Control.extend({
  options: {
    position: 'bottomright',
    marginTop: 0,
    marginLeft: 0,
    marginBottom: 0,
    marginRight: 0
  },
  onAdd: function () {
    var div = L.DomUtil.create('div', 'esri-leaflet-logo');
    div.style.marginTop = this.options.marginTop;
    div.style.marginLeft = this.options.marginLeft;
    div.style.marginBottom = this.options.marginBottom;
    div.style.marginRight = this.options.marginRight;
<<<<<<< HEAD
    div.innerHTML = '<a href="https://developers.arcgis.com" style="border: none;"><img src="https://js.arcgis.com/3.10/js/esri/images/map/logo-med.png" style="border: none;"></a>';
=======
    div.innerHTML = '<a href="https://developers.arcgis.com" style="border: none;"><img src="http://js.arcgis.com/3.10/js/esri/images/map/logo-med.png" style="border: none;"></a>';
>>>>>>> d522b84d3395ffeebab22c020a51c35daec2a891
    return div;
  }
});

EsriLeaflet.Controls.logo = function(options){
  return new L.esri.Controls.Logo(options);
<<<<<<< HEAD
};
=======
};
>>>>>>> d522b84d3395ffeebab22c020a51c35daec2a891
