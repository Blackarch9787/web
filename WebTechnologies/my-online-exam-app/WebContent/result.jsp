<!-- result.jsp -->
<!DOCTYPE html>
<html>
<head>
    <title>Exam Result</title>
</head>
<body>
    <h2>Your Score: <%= request.getAttribute("score") %> / <%= request.getAttribute("totalQuestions") %></h2>
</body>
</html>
