j$(document).ready(function() {

    j$ = jQuery.noConflict(); 
	
	// SWITCH TOGGLE	
	//var elem = document.querySelector('.js-switch');

	var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));

	j$('.js-switch').each(function() {
	    new Switchery(this, { 
	    	color: '#37cf36', 
			secondaryColor: '#43bdcd', 
			jackColor: '#ffffff', 
			jackSecondaryColor: '#ffffff',
			size: 'small',
			disabled: false, 
			disabledOpacity: 0.5
	    })
	});

	elems.forEach(function(html) {
	  var switchery = new Switchery(html);
	});

	// default switch toggle OFF
	j$(".accordion").hide();

    // Activate switch
	j$('#activate-content-1').change(function(){
        if(this.checked) {
            j$("#tab-default-1 .accordion").show();
            j$('.innertree').attr('style','display:block');
        } else {
            j$("#tab-default-1 .accordion").hide();
            j$('.innertree').attr('style','display:none');
        }
    });

    j$('#activate-content-2').change(function(){
        if(this.checked)
            j$("#tab-default-2 .accordion").show();
        else
            j$("tab-default-2 .accordion").hide();

    });

    j$('#activate-content-3').change(function(){
        if(this.checked)
            j$("#tab-default-3 .accordion").show();
        else
            j$("tab-default-3 .accordion").hide();

    });

    j$('#activate-content-4').change(function(){
        if(this.checked)
            j$("#tab-default-4 .accordion").show();
        else
            j$("tab-default-4 .accordion").hide();

    });

    j$('#activate-content-5').change(function(){
        if(this.checked)
            j$("#tab-default-5 .accordion").show();
        else
            j$("tab-default-5 .accordion").hide();

    });

    j$('#activate-content-6').change(function(){
        if(this.checked)
            j$("#tab-default-6 .accordion").show();
        else
            j$("tab-default-6 .accordion").hide();

    });

	//Add switch toggle after ID setting-accordion--section

    j$('ul.innertree li a').click(function(){

        j$('.accordion-1').attr('style','display:block');

    });

    // j$('#bodyCell span:first', this).prop('class', 'omar');

    j$('#bodyCell span').eq(1).attr('id','SFSettingContainer');

    // Convert SF Span to Div
    // Get all the span's inside #bodyCell
    //var j$span = j$("span#SFSettingContainer");

    // // Replace all the span's with a div
    // j$span.replaceWith(function () {
    //     return j$('<div/>', {
    //         class: 'SFSettingContainer',
    //         html: this.innerHTML
    //     });
    // });
    
    //  SEARCH
    (function(j$){
        j$(document).ready(function() {
            j$("#searchsettings").keyup(function(){
                
                // Retrieve the input field text and reset the count to zero
                var filter = j$(this).val();

                // Loop through the comment list
                j$("#searchList li").each(function(){
                    
                    // If the list item does not contain the text phrase fade it out
                    if (j$(this).text().search(new RegExp(filter, "i")) < 0) {
                        j$(this).addClass('hidden');
                    // Show the list item if the phrase matches and increase the count by 1
                    } else {
                        j$(this).removeClass('hidden');
                        
                    }
                });

            
            });
        })
    })(jQuery);

});