<%@ page language = "java" import = "java.net.*" import = "java.io.*" %>
<%
String search,mime;
	HttpSession ses = request.getSession(true);
	//search = "http://www.theflexshow.com/blog/images/the_flex_show.jpg";
	String mathml = request.getParameter("mathml");
	try{
		mathml = java.net.URLEncoder.encode(mathml, "UTF-8");
	}catch(Exception e){
		
	}
	search = "http://origin.longsight.com/mathml/umm/image.php?mathml=" + mathml + "&fontsize=" + request.getParameter("fontsize");
  System.out.println(search);

	if(request.getParameter("mimeType") == null)
			mime = "application/xml";
		else
			mime =request.getParameter("url");
	mime = mime.trim();
	InputStream resultInStream = null;
	OutputStream resultOutStream = response.getOutputStream();
 response.setContentType(mime); 
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
