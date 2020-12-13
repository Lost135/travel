package travel.dao;

import travel.domain.Route;

import java.util.List;

public interface FindFavorDao {
    public int findTotalCount(int uid);
    public List<Route> findByPage(int start , int pageSize, int uid);
}
