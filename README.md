# TRAVEL

## 旅游网站练习/travel

------

一.根据视频做了一个旅游主题的网站
>但是因为时间和能力没能完善功能,代码写得也比较乱.  
>2020.12.13

------

二.技术选型
  1. Web层
     * Servlet：前端控制器
     * html：视图
     * Filter：过滤器
     * BeanUtils：数据封装
     * Jackson：json序列化工具
  2. Service层
     * Javamail：java发送邮件工具
     * Redis：nosql内存数据库
     * Jedis：java的redis客户端
  3. Dao层
     * Mysql：数据库
     * Druid：数据库连接池
     * JdbcTemplate：jdbc的工具
  4. 相关软件
     * IDEA
     * tomcat
     * maven
     * chrome
     * mysql
     * redis
     
------

三.主要功能
  1. index
     * 数据展示
  2. header
     * 模糊搜索
     * 内容分类搜索
     * 注销登录
  3. login
     * 登录
     * 图片验证码
  4. register
     * 输入规则验证
     * 邮件连接激活
     * 重复用户名检查
  5. route_list
     * 数据展示
     * 分页
  6. route_detail
     * 数据展示
     * 收藏功能
  7. myfavorite
     * 过滤器登录检查
     * 根据用户展示数据
  8. favoriterank
     * 根据收藏数展示数据(因为懒没做 :)

------
四.Thanks感谢
  * B站视频 [2019年IDEA版黑马Java就业班-JavaWeb](https://www.bilibili.com/video/BV11741127ic)
    >原网站应该是[传播智课/黑马程序员](http://www.itcast.cn/)
  * IDEA的免费学生高级版
     

