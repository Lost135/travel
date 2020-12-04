package travel.dao.impl;

import org.graalvm.compiler.lir.LIRInstruction;
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
}
