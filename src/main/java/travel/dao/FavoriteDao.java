package travel.dao;

import travel.domain.Favorite;

public interface FavoriteDao {
    Favorite findByRidAndUid(int rid, int uid);

    int findCountByRid(int rid);

    void add(int rid, int uid);

    public void del(int rid, int uid);
}
