<!-- exam.jsp -->
<%@ page import="java.util.List" %>
<%@ page import="models.Question" %>
<%
    List<Question> questions = (List<Question>) request.getAttribute("questions");
%>
<!DOCTYPE html>
<html>
<head>
    <title>Online Exam</title>
</head>
<body>
    <form action="SubmitServlet" method="post">
        <%
            for (Question q : questions) {
        %>
            <p><%= q.getQuestion() %></p>
            <input type="radio" name="q<%= q.getId() %>" value="1"> <%= q.getOption1() %><br>
            <input type="radio" name="q<%= q.getId() %>" value="2"> <%= q.getOption2() %><br>
            <input type="radio" name="q<%= q.getId() %>" value="3"> <%= q.getOption3() %><br>
            <input type="radio" name="q<%= q.getId() %>" value="4"> <%= q.getOption4() %><br>
        <%
            }
        %>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
