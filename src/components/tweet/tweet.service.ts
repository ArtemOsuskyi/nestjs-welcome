import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tweet } from "./tweet.model";
import { DeleteResult, Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-dto";
import { UpdatePostDto } from "./dto/update-dto";
import { User } from "../user/user.model";

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private postRepository: Repository<Tweet>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async findAllPosts(): Promise<Tweet[]> {
    return this.postRepository.find();
  }

  async findPost(postId: number): Promise<Tweet> {
    return this.postRepository.findOne({
      where: {
        id: postId,
      },
    });
  }

  async createPost(createPostDto: CreatePostDto): Promise<Tweet> {
    await this.userRepository.findOneOrFail({
      where: { id: createPostDto.author },
    });
    return this.postRepository.save({
      title: createPostDto.title,
      text: createPostDto.text,
      author: { id: createPostDto.author },
    });
  }
  async updatePost(updatePostDto: UpdatePostDto, postId: number) {
    const findPost = await this.postRepository.findOneOrFail({
      where: {
        id: postId,
      },
    });
    await this.postRepository.update(updatePostDto, findPost);
    return findPost;
  }

  async removePost(postId: number): Promise<DeleteResult> {
    return this.postRepository.delete({ id: postId });
  }
}
