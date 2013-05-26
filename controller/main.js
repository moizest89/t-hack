function LoginControl($scope) {
  
  $scope.entrar = function() {

    //$.post("http://108.166.64.74:3000/users/sign_in", $("#login_form").serialize(),function(data){console.log(data)})
  
    jQuery.ajax({
        url: "http://108.166.64.74:3000/users/sign_in?callback=?",
        data: $("#login_form").serialize(),
        type: "POST",
        dataType: "json",
        success: function(data){
          alert(data)
        }
    });
  }
}