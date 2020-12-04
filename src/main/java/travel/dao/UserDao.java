package travel.dao;

import travel.domain.User;

public interface UserDao {
    User findByName(String username);

    void save(User user);
}
