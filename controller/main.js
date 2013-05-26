var datos = null;
function LoginControl($scope) {
  
  $scope.entrar = function() {
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
      // console.log(data);
      //Lungo.Router.section("layout-art1");
      if(data.success){
        datos = data;
        Lungo.Notification.hide();
        Lungo.Router.article("main-page","layout-art1");
        
      }
      else{

      }
      Lungo.Notification.hide();
    });
  
  }
}

function LandinControl($scope) {

}