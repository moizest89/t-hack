var datos = null;

function LoginControl($scope) {
  
  $scope.entrar = function(){
    // var afterNotification = function(){
    //     //Do something
    // };
    Lungo.Notification.show(
        "loading",              //Title
        "check"                //Icon
        // afterNotification       //Callback function
    );
    
    //Show loading screen
    Lungo.Notification.show();
    $.post("http://108.166.64.74:3000/users/sign_in.json", $("#login_form").serialize(),function(data){
      //console.log(data);
      //Lungo.Router.section("layout-art1");
      if(data.success){
        datos = data;
        Lungo.Notification.hide();
        Lungo.Router.article("main-page","lading-page");

      }
      else{

      }
      Lungo.Notification.hide();
    });
  
  }
}


Lungo.dom('#lading-page').on('load', function(event){
  var string = $("#lading-page").html();
  string = string.replace("<!--amount-->",datos.user.wallet)
  $("#lading-page").html(string);
  var string = $("#content-creditos").html();
  var stringFinal = "";
  for(i = 0; i < datos.accounts.length;i++){
    string = string.replace("<!--fee-->",datos.accounts[i].fee);
    string = string.replace("<!--porcentaje-->",(datos.accounts[i].amount*100)/datos.accounts[i].fee);
    stringFinal = string;
  }
  $("#content-creditos").html(stringFinal);
});

