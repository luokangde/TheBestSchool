package wang.yobbo.admin.dao;

import org.apache.ibatis.annotations.Param;
import wang.yobbo.admin.entity.UpmsUser;
import wang.yobbo.admin.entity.UpmsUserCriteria;
import wang.yobbo.common.annotation.Mapper;

import java.util.List;

public interface UpmsUserMapper {
    int countByExample(UpmsUserCriteria example);

    int deleteByExample(UpmsUserCriteria example);

    int deleteByPrimaryKey(Integer userId);

    int insert(UpmsUser record);

    int insertSelective(UpmsUser record);

    List<UpmsUser> selectByExample(UpmsUserCriteria example);

    UpmsUser selectByPrimaryKey(Integer userId);

    int updateByExampleSelective(@Param("record") UpmsUser record, @Param("example") UpmsUserCriteria example);

    int updateByExample(@Param("record") UpmsUser record, @Param("example") UpmsUserCriteria example);

    int updateByPrimaryKeySelective(UpmsUser record);

    int updateByPrimaryKey(UpmsUser record);
}