package travel.service.impl;

import travel.dao.FavoriteDao;
import travel.dao.impl.FavoriteDaoImpl;
import travel.domain.Favorite;
import travel.service.FavoriteService;

public class FavoriteServiceImpl implements FavoriteService {
    private FavoriteDao favoriteDao = new FavoriteDaoImpl();
    @Override
    public boolean isFavorite(String rid, int uid) {
        Favorite favorite = favoriteDao.findByRidAndUid(Integer.parseInt(rid),uid);
        return favorite != null;
    }

    public void add(String rid,int uid){
        favoriteDao.add(Integer.parseInt(rid),uid);
    }

    @Override
    public void del(String rid, int uid) {
        favoriteDao.del(Integer.parseInt(rid),uid);
    }
}
