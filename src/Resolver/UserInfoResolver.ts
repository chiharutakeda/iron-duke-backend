import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { UserInfoEntity } from '../entity/UserInfoEntity';
import { UserInfoInputType } from '../Inputtype/UserInfoInputType';

@Resolver(UserInfoEntity)
export class UserInfoResolver {

  //全てのユーザーデータを取得
  @Query(() => [UserInfoEntity], { nullable: true })
  async getAllUser() {
    const AllUserInfo = await UserInfoEntity.find();
    return AllUserInfo;
  }

  //ログインする。
  @Mutation(() => UserInfoEntity, { nullable: true })
  async Login(@Arg('LoginData') { email, password }: UserInfoInputType) {
    //ユーザーデータが存在すればログインする
    const User = await UserInfoEntity.findOne({
      email:email,
      password:password
    });
    //保存してその内容をreturnする。
    return User;
  }

  //ユーザー新規登録
  @Mutation(() => UserInfoEntity, { nullable: true })
  async createUser(@Arg('UserData') { email, password }: UserInfoInputType) {
    

    //ユーザーデータ登録
    const User = await UserInfoEntity.create({
      email:email,
      password:password
    });

    //保存してその内容をreturnする。
    return User.save();
  }
}
