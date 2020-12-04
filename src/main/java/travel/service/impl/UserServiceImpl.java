package travel.service.impl;

import travel.dao.UserDao;
import travel.dao.impl.UserDaoImpl;
import travel.domain.User;
import travel.service.UserService;

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
        userDao.save(user);
        return true;
    }
}
