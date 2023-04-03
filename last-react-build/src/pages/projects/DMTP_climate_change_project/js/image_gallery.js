jQuery(document).ready(function () {

    jQuery("#nanogallery2").nanogallery2( {
        // ### gallery settings ### 
        thumbnailHeight:  '14%',
        thumbnailWidth:   '14%',
        itemsBaseURL:     'https://aboutduy.com/DMTP_climate_change_project/images/',
        
        // ### gallery content ### 
        items: [
            { src: 'poor_area_map.jpg', srct: 'poor_area_map.jpg', title: 'Berlin 1' },
            { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
            { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' }
          ]
      });
  });