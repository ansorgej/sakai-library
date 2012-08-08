<%@ page language = "java" import = "java.net.*" import = "java.io.*" %>
<%
String search,mime;
	HttpSession ses = request.getSession(true);
	//search = "http://www.theflexshow.com/blog/images/the_flex_show.jpg";
	search = "http://origin.longsight.com/mathml/umm/images/" + request.getParameter("url");

	if(request.getParameter("mimeType") == null)
			mime = "application/xml";
		else
			mime =request.getParameter("url");
	mime = mime.trim();
	InputStream resultInStream = null;
	OutputStream resultOutStream = response.getOutputStream();
%>
<% response.setContentType(mime); %>
<%
try
	 {
		 URL url = new URL(search);
		 resultInStream = url.openStream();
		 byte[] buffer = new byte[4096];
		 int bytes_read;
		 while((bytes_read=resultInStream.read(buffer)) != -1)
		  {
			   resultOutStream.write(buffer, 0, bytes_read);
		  }
		  resultOutStream.flush();
		  resultOutStream.close();
		  resultInStream.close();
 	} catch (Exception e) {System.out.println(e);}
	   finally{ try {  resultOutStream.flush(); resultOutStream.close(); resultInStream.close();  } catch (Exception e) {System.out.println(e);}
 }%>
