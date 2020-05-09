<script type="text/javascript">

        $(function(){

 

// Create a new AJAXPaypalCart Object

var cart = $('#cart').DCAJAXPaypalCart({

    width:600,

    autoOpenWhenAdd:true,

    openNewCheckOutWindow:true,

    //themeColor:'#333',

    //themeDarkColor:'#FFF',

    header:'AJAX Cart Demo',

    footer:'We accpet paypal, visa and master card. (This is a customizable footer)',

    paypalOptions:{

        business:'tsangwl@digicrafts.com.hk',

        page_style:'digicrafts'

    }

});

 

// Add the button

cart.addBuyButton("#macbook",{

    name:'MacBook',         // Item name appear on the cart

    thumbnail:'media/macbook.jpg',      // <a href="https://www.jqueryscript.net/tags.php?/Thumbnail/">Thumbnail</a> path of the item (Optional)

    price:'999',// Cost of the item
24
    shipping:20 // Shipping cost for the item (Optional)
25
});
26
cart.addBuyButton("#macbookair",{
27
    name:'MacBook Air',
28
    thumbnail:'media/macbook.jpg',
29
    price:'999',
30
    shipping:20
31
});
32
cart.addBuyButton("#macbookpro",{
33
    name:'MacBook Pro',
34
    thumbnail:'media/macbookpro.jpg',
35
    price:'1199',
36
    shipping:0
37
});
38
cart.addBuyButton("#imac",{

    name:'iMac',

    thumbnail:'media/macbook.jpg',

    price:'1199',

    shipping:0

});

cart.addBuyButton("#macmini",{

    name:'Mac Mini',

    thumbnail:'media/macbookpro.jpg',

    price:'699',

    shipping:20

});

cart.addBuyButton("#macpro",{

    name:'Mac pro',

    thumbnail:'media/macpro.jpg',

    price:'2499'

});

cart.addBuyButton("#macosx",{   

    name:'Mac OS X',

    thumbnail:'media/macosx.jpg',

    price:'99',

    allowMultiple:false

});          

 

// For code highlight

prettyPrint();
 
        });
{
        alert prompt()
        console.log("Added To Cart")

        var Stand = "Standard Delivery";
        var Sub = "Sub-Total Delivery";
        var Num = "Num";
        var Price = "Price";
        var Total = "Total";

        int "Sub" = $7;
        int "Total" = (Price + Sub);

document.getElementBybutton('button').addEventListener('click', function(){
    alert('Hello 2');
});


</script>
