import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { TweetService } from "./tweet.service";
import { Tweet } from "./tweet.model";
import { CreatePostDto } from "./dto/create-dto";
import { UpdatePostDto } from "./dto/update-dto";
import { DeleteResult } from "typeorm";

@Controller("posts")
export class TweetController {
  constructor(private readonly postService: TweetService) {}

  @Get()
  async getAll(): Promise<Tweet[]> {
    return this.postService.findAllPosts();
  }

  @Get(":id")
  async getOne(@Param() params): Promise<Tweet> {
    return this.postService.findPost(params.id);
  }

  @Post("create")
  async create(@Body() createPostDto: CreatePostDto): Promise<Tweet> {
    return this.postService.createPost(createPostDto);
  }

  @Put(":id")
  async update(
    @Param() params,
    @Body() updatePostDto: UpdatePostDto
  ): Promise<Tweet> {
    return this.postService.updatePost(updatePostDto, params.id);
  }

  @Delete(":id")
  async remove(@Param() params): Promise<DeleteResult> {
    return this.postService.removePost(params.id);
  }
}
