package travel.service;

public interface FavoriteService {
    public boolean isFavorite(String rid, int uid);

    public void add(String rid, int uid);

    public void del(String rid, int uid);
}
