package travel.web.filter;

import travel.domain.User;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "Filter1",value = "/*")
public class LoginFilter implements Filter {
    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        HttpServletRequest request = (HttpServletRequest) req;

        String uri = request.getRequestURI();
        if(uri.contains("/favoriterank.html") || uri.contains("/myfavorite.html") ){
            User user = (User)request.getSession().getAttribute("user");
            if(user != null){
                chain.doFilter(req, resp);
            }else {
                request.getRequestDispatcher("/login.html").forward(request,resp);
            }
        }else {
            chain.doFilter(req, resp);
        }
    }

    public void init(FilterConfig config) throws ServletException {

    }

}
