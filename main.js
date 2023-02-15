


function cargardatos() {
    // app.use(function(req, res, next){
  
    //     res.setHeader("Access-Control-Allow-Origin", "*");
    //     res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
    //     res.setHeader("Access-Control-Allow-Headers","X-Requested-With, content-type");
    //     res.setHeader("Access-Control-Allow-Credentials", "true");
    //     next();
    // })
  
    var cuerpotabla =
      "<thead> <th> <b>id_beneficiado</b> </th> <th> <b>dni_beneficiado </b></th>  <th><b>img</b></th>  <th><b>nombre_beneficiado</b> </th>  <th><b>apellido_beneficiado</b></th>  <th><b>edad_beneficiado</b></th>  <th><b>pais_residencia_beneficiado</b></th>"+
    //   "  <th><b>dni_donante</b></th>  <th><b>id_tipo_de_beneficio</b></th>  <th><b>id_beneficios</b></th></thead>";
    $.ajax({
      type: "GET",
      url: "https://desfrlopez.me/mordonez/api/persona",
      success: function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          cuerpotabla +=
            "<tr>" +
            "<td>" +
            data[i].id_beneficiado +
            "</td>" +
            "<td>" +
            data[i].dni_beneficiado +
            "</td>" +
            "<td>" +
            "<img src = "+
            data[i].img + 
            "height='50px' width='50px'>" +
            "</td>" +
            "<td>" +
            data[i].nombre_beneficiado +
            "</td>" +
            "<td>" +
            data[i].apellido_beneficiado +
            "</td>" +
            "<td>" +
            data[i].edad_beneficiado +
            "</td>" +
            "<td>" +
            data[i].pais_residencia_beneficiado +
            "</td>" 
            // "<td>" +
            // data[i].dni_donante +
            // "</td>" +
            // "<td>" +
            // data[i].id_tipo_de_beneficio +
            // "</td>" +
            // "<td>" +
            // data[i].id_beneficios +
            // "</td>" +
            // "<tr>";
        }
        $("#reporte").html(cuerpotabla);

        
      },
      dataType: "json",
    });
  }
  
  function enviardatos() {
    jQuery.ajaxSetup({ async: false });
    var frm_datos = {
        dni_beneficiado: $("#dni_beneficiario").val(),
      img: $("#img_beneficiario").val(),
      nombre_beneficiado: $("#Nombre_beneficiario").val(),
      apellido_beneficiado: $("#Apellido_beneficiario").val(),
      edad_beneficiado: $("#edad_beneficiario").val(),
      pais_residencia_beneficiado: $("#Direccion_beneficiario").val(),
    //  rtn_ONG: $("#rtn").val(),
    //  nombre_ONG: $("#Nombre_ong").val(),
    //  direccion_ONG: $("#Direccion").val(),
    //  dni_donante: $("#dni").val(),
    //  nombre_donante: $("#Nombre_donante").val(),
    //  pellido_donante: $("#Apellido_donante").val(),
    //  pais_residencia_donante: $("#Direccion_donante").val(),
    //  beneficio: $("#Beneficio").val(),
    //  beneficio: $("#Beneficios").val(),
    //  nombre_centro_educatico: $("#centro_edu").val(),
    //  direccion_centro_educatico: $("#Direccion_c_u").val()
     
    };
    var smj = "incersion exitosa";
    $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/mordonez/api/persona",
      data: JSON.stringify(frm_datos),
      success: function (data) {
        for (var i = 0; i < data.length; i++) {
          smj += "Id registro" + data[i].insertId;
        }
        alert(smj);
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    });
   
    cargardatos();
  }

   
 
  
  function actualizardatos(){
  
      jQuery.ajaxSetup({async:false});
  
      var datosForm = {
        dni_beneficiado: $("#dni_beneficiario").val(),
        img: $("#img_beneficiario").val(),
        nombre_beneficiado: $("#Nombre_beneficiario").val(),
        apellido_beneficiado: $("#Apellido_beneficiario").val(),
        edad_beneficiado: $("#edad_beneficiario").val(),
        pais_residencia_beneficiado: $("#Direccion_beneficiario").val(),
      };
  
      let id = $("#idb").val();
  
      var mensaje = "Actualizacion Exitosa";
      $.ajax({
          type: "PUT",
          url: "https://desfrlopez.me/mordonez/api/persona/"+id,
          data: JSON.stringify(datosForm),
          success: function(data){
              console.log(data);
              for (var i = 0; i < data.length ; i++ ){
                  mensaje += " Id Registro "+ data[i].insertId;                
              }
              alert(mensaje);
          },
          dataType: "json", 
          contentType: "application/json; charset=utf-8"
        });
  
        cargardatos();
  

  }

  function eliminardatos(){
  
    jQuery.ajaxSetup({ async: false });
  
    let id =  $("#idb").val();
    var smj = "Borrado  exitosa";
    $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      
      success: function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          smj += "Id registro" + data[i].insertId;
        }
        alert(smj);
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    });
    cargardatos();
}


// ONG

  function enviardatos_t_ong() {
    jQuery.ajaxSetup({ async: false });
    var frm_datos = {
      //   dni_beneficiado: $("#dni_beneficiario").val(),
      // img: $("#img_beneficiario").val(),
      // nombre_beneficiado: $("#Nombre_beneficiario").val(),
      // apellido_beneficiado: $("#Apellido_beneficiario").val(),
      // edad_beneficiado: $("#edad").val(),
      // pais_residencia_beneficiado: $("#Direccion_beneficiario").val(),
     rtn_ONG: $("#rtn").val(),
     nombre_ONG: $("#Nombre_ong").val(),
     direccion_ONG: $("#Direccion").val()
    //  dni_donante: $("#dni").val(),
    //  nombre_donante: $("#Nombre_donante").val(),
    //  pellido_donante: $("#Apellido_donante").val(),
    //  pais_residencia_donante: $("#Direccion_donante").val(),
    //  beneficio: $("#Beneficio").val(),
    //  beneficio: $("#Beneficios").val(),
    //  nombre_centro_educatico: $("#centro_edu").val(),
    //  direccion_centro_educatico: $("#Direccion_c_u").val()
     
    };
    var smj = "incersion exitosa";
    $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/mordonez/api/persona",
      data: JSON.stringify(frm_datos),
      success: function (data) {
        for (var i = 0; i < data.length; i++) {
          smj += "Id registro" + data[i].insertId;
        }
        alert(smj);
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    });
    cargardatos();
   
  }

  function actualizardatos_ong(){
  
    jQuery.ajaxSetup({async:false});

    var datosForm = {
      rtn_ONG: $("#rtn").val(),
     nombre_ONG: $("#Nombre_ong").val(),
     direccion_ONG: $("#Direccion").val()
    };

    let id = $("#id").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mordonez/api/persona/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargardatos();

}
  

  // function actualizardatos(){
  //     jQuery.ajaxSetup({ async: false });
  //     var frm_datos = {
  //       dni_beneficiado: $("#dni_beneficiario").val(),
  //     img: $("#img_beneficiario").val(),
  //     nombre_beneficiado: $("#Nombre_beneficiario").val(),
  //     apellido_beneficiado: $("#Apellido_beneficiario").val(),
  //     edad_beneficiado: $("#edad").val(),
  //     pais_residencia_beneficiado: $("#Direccion_beneficiario").val(),
  //     };
  //     let id =  $("#dni_beneficiario").val();
  //     var smj = "Actualizacion exitosa";
  //     $.ajax({
  //       type: "PUT",
  //       url: "https://desfrlopez.me/mordonez/api/persona/"+id,
  //       data: JSON.stringify(frm_datos),
  //       success: function (data) {
  //         console.log(data);
  //         for (var i = 0; i < data.length; i++) {
  //           smj += "Id registro" + data[i].insertId;
  //         }
  //         alert(smj);
  //       },
  //       dataType: "json",
  //       contentType: "application/json; charset=utf-8",
  //     });
  //     cargardatos();
  // }
  
  
   



  function eliminardatos_ong(){
  
    jQuery.ajaxSetup({ async: false });
  
    let id =  $("#id").val();
    var smj = "Borrado  exitosa";
    $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      
      success: function (data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
          smj += "Id registro" + data[i].insertId;
        }
        alert(smj);
      },
      dataType: "json",
      contentType: "application/json; charset=utf-8",
    });
    cargardatos();
}


  // centro_educativo





  


function insertarDatos_cu(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
      nombre_centro_educatico: $("#centro_edu").val(),
     direccion_centro_educatico: $("#Direccion_c_u").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/mordonez/api/persona",
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargardatos()

}


function actualizarDatos_cu(){

    jQuery.ajaxSetup({async:false});

    var datosForm = {
      nombre_centro_educatico: $("#centro_edu").val(),
      direccion_centro_educatico: $("#Direccion_c_u").val()
    };

    let id = $("#idcu").val();

    var mensaje = "Actualizacion Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/mordonez/api/persona/"+id,
        data: JSON.stringify(datosForm),
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargarDatos()

}

function borrarDatos_cu(){

    jQuery.ajaxSetup({async:false});

    let id = $("#idcu").val();

    var mensaje = "Borrado Exitoso Exitoso";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/mordonez/api/persona/"+id,
        success: function(data){
            console.log(data);
            for (var i = 0; i < data.length ; i++ ){
                mensaje += " Id Registro "+ data[i].insertId;                
            }
            alert(mensaje);
        },
        dataType: "json", 
        contentType: "application/json; charset=utf-8"
      });

      cargardatos()

}

// donantes



function insertarDatos_do(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    dni_donante: $("#dni").val(),
     nombre_donante: $("#Nombre_donante").val(),
     pellido_donante: $("#Apellido_donante").val(),
     pais_residencia_donante: $("#Direccion_donante").val()
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/mordonez/api/persona",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}

function actualizarDatos_do(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    dni_donante: $("#dni").val(),
     nombre_donante: $("#Nombre_donante").val(),
     pellido_donante: $("#Apellido_donante").val(),
     pais_residencia_donante: $("#Direccion_donante").val()
  };

  let id = $("#ido").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatos()

}

function borrarDatos_do(){

  jQuery.ajaxSetup({async:false});

  let id = $("#ido").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}

// tipo_de_beneficio


function insertarDatos_tb(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    beneficio: $("#Beneficio").val(),
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/mordonez/api/persona",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}

function actualizarDatos_tb(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    beneficio: $("#Beneficio").val(),
  };

  let id = $("#idtb").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatos()

}

function borrarDatos_tb(){

  jQuery.ajaxSetup({async:false});

  let id = $("#idtb").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}




// todos_los_beneficio_ONG


function insertarDatos_bong(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    beneficio: $("#Beneficios").val(),
  };

  var mensaje = "Insercion Exitosa";
  $.ajax({
      type: "POST",
      url: "https://desfrlopez.me/mordonez/api/persona",
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}

function actualizarDatos_bong(){

  jQuery.ajaxSetup({async:false});

  var datosForm = {
    beneficio: $("#Beneficios").val(),
  };

  let id = $("#idtbong").val();

  var mensaje = "Actualizacion Exitosa";
  $.ajax({
      type: "PUT",
      url: "https://desfrlopez.me/mordonez/api/persona"+id,
      data: JSON.stringify(datosForm),
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargarDatos()

}

function borrarDatos_bong(){

  jQuery.ajaxSetup({async:false});

  let id = $("#idtbong").val();

  var mensaje = "Borrado Exitoso Exitoso";
  $.ajax({
      type: "DELETE",
      url: "https://desfrlopez.me/mordonez/api/persona/"+id,
      success: function(data){
          console.log(data);
          for (var i = 0; i < data.length ; i++ ){
              mensaje += " Id Registro "+ data[i].insertId;                
          }
          alert(mensaje);
      },
      dataType: "json", 
      contentType: "application/json; charset=utf-8"
    });

    cargardatos()

}