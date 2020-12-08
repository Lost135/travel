package travel.service.impl;

import travel.dao.UserDao;
import travel.dao.impl.UserDaoImpl;
import travel.domain.User;
import travel.service.UserService;
import travel.util.MailUtils;
import travel.util.UuidUtil;

public class UserServiceImpl implements UserService {
    private UserDao userDao = new UserDaoImpl();
    /**
     * 注册用户
     * @param user
     * @return
     */
    @Override
    public boolean regist(User user) {
        User u = userDao.findByName(user.getUsername());
        if(u != null){
            return false;
        }
        user.setCode(UuidUtil.getUuid());
        user.setStatus("N");
        userDao.save(user);

        String content="<a href='http://localhost:8080/travel/activeUserServlet?code="+user.getCode()+"'>点击激活【LOST旅游网】</a>";

        MailUtils.sendMail(user.getEmail(),content,"激活邮件");
        return true;
    }

    /**
     * 激活用户
     * @param code
     * @return
     */
    @Override
    public boolean active(String code) {
        User user = userDao.findByCode(code);
        if (user != null){
            userDao.updateStatus(user);
            return true;
        }else {
            return false;
        }

    }

    /**
     * 登录方法
     * @param user
     * @return
     */
    @Override
    public User login(User user) {
        return userDao.findByUsernameAndPassword(user.getUsername(),user.getPassword());
    }
}
