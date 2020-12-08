package travel.dao.impl;

import org.graalvm.compiler.lir.LIRInstruction;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import travel.dao.UserDao;
import travel.domain.User;
import travel.util.JDBCUtils;

public class UserDaoImpl implements UserDao {
    private JdbcTemplate template = new JdbcTemplate(JDBCUtils.getDataSource());

    @Override
    public User findByName(String username) {
        User user = null;
        String sql = "select * from tab_user where username = ?";
        try {
            user = template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class), username);

        }catch (Exception e){

        }
        return user;
    }

    @Override
    public void save(User user) {
        String sql = "insert into tab_user(username,password,name,birthday,sex,telephone,email,status,code) values(?,?,?,?,?,?,?,?,?)";
        //2.执行sql

        template.update(sql,user.getUsername(),
                user.getPassword(),
                user.getName(),
                user.getBirthday(),
                user.getSex(),
                user.getTelephone(),
                user.getEmail(),
                user.getStatus(),
                user.getCode()
        );
    }

    /**
     * 根据激活码查询用户对象
     * @param code
     * @return
     */
    @Override
    public User findByCode(String code) {
        User user = null;
        try {
            String sql = "select * from tab_user where code = ?";
            user = template.queryForObject(sql,new BeanPropertyRowMapper<User>(User.class),code);
        }catch (DataAccessException e){
            e.printStackTrace();
        }
        return user;
    }

    /**
     * 修改指定用户激活状态
     * @param user
     */
    @Override
    public void updateStatus(User user) {
        String sql = " update tab_user set status = 'Y' where uid=?";
        template.update(sql,user.getUid());
    }

    @Override
    public User findByUsernameAndPassword(String username, String password) {
        User user = null;
        String sql = "select * from tab_user where username = ? and password = ?";
        try {
            user = template.queryForObject(sql, new BeanPropertyRowMapper<User>(User.class), username,password);

        }catch (Exception e){

        }
        return user;
    }
}
