import { hash, compare } from 'bcryptjs';
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
    //ユーザーデータ取得
    const user = await UserInfoEntity.findOne({
      where: {
        email: email,
      },
    });

    //ユーザデータ取得できてなかったらエラー
    if (!user) {
      throw new Error('not find user');
    }
    //パスワード比較
    const isPassOk = await compare(password, user.password);

    if (!isPassOk) {
      throw new Error('not find user');
    }
    //保存してその内容をreturnする。
    return user;
  }

  //ユーザー新規登録
  @Mutation(() => UserInfoEntity, { nullable: true })
  async createUser(@Arg('UserData') { email, password }: UserInfoInputType) {
    const hashedPassword = await hash(password, 12);
    //ユーザーデータ登録
    const User = await UserInfoEntity.create({
      email: email,
      password: hashedPassword,
    });

    //保存してその内容をreturnする。
    return User.save();
  }
}
