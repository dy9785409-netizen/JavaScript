<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *{
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <h1 align="center">First JSP progamme</h1>
    <H1 align="center">Registration Form</H1>
    
    <form  method="post" action="login.jsp">
        <table  align="center" border="2px solid red">
            <tr>
                <th>Name </th>
                <td><input type="text" name="name"></td>
            </tr>
            <tr>
                <th>Password </th>
                <td><input type="password" name="password"></td>
            </tr>
            <tr>
                <th>Email </th>
                <td><input type="email" name="mail"></td>
            </tr>
            <tr>
                <th>Select City  </th>
                <td>
                    <select name="city">
                        <option >Sonbhadra</option>
                        <option>Allahabad</option>
                        <option>Delhi</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th colspan="2"><button value="Login" name="Login">Login</button></th>
            </tr>
        </table>       
    </form>    
</body>
</html>
