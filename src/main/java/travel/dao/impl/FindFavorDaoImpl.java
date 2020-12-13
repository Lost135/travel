package travel.dao.impl;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import travel.dao.FindFavorDao;
import travel.domain.Route;
import travel.util.JDBCUtils;

import java.util.List;

public class FindFavorDaoImpl implements FindFavorDao {
    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());
    @Override
    public int findTotalCount(int uid) {
        String sql = "select count(*) from tab_favorite where uid = ? ";
        return template.queryForObject(sql,Integer.class,uid);
    }

    @Override
    public List<Route> findByPage(int start, int pageSize, int uid) {
        String sql = "select a.rid,a.rname,a.price,a.routeIntroduce,a.rflag,a.rdate,a.isThemeTour,a.count," +
                "a.cid,a.rimage,a.sid,a.sourceId from tab_route a left join tab_favorite b on (a.rid = b.rid) " +
                "where uid = ? limit ? , ?;";
        return template.query(sql,new BeanPropertyRowMapper<Route>(Route.class),uid,start,pageSize);
    }
}
