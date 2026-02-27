<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
      String password=request.getParameter("password");
      String name = request.getParameter("name"); 
      String mail=request.getParameter("mail");
      String city=request.getParameter("city");

      session.setAttribute("name",name);
      session.setAttribute("mail",mail);
      session.setAttribute("password",password);
      session.setAttribute("city",city);

      if(password.equals("123")){
        response.sendRedirect("regForm.jsp");
      }else{
     
        response.sendRedirect("index.jsp");
      }   
    %>
    
</body>
</html>