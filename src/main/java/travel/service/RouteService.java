package travel.service;

import travel.domain.PageBean;
import travel.domain.Route;


/**
 * 线路Service
 */
public interface RouteService {

    /**
     * 根据类别进行分页查询
     * @param cid
     * @param currentPage
     * @param pageSize
     * @param rname
     * @return
     */
    public PageBean<Route> pageQuery(int cid, int currentPage, int pageSize, String rname);

    public Route findOne(String rid);

    public PageBean<Route> favoriteQuery(int currentPage, int pageSize,int uid);
}
