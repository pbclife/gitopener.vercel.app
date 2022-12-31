import mongoose, { Model, model } from 'mongoose';

export type TContributor = {
  ghid: number;
  gh_username: string;
  name: string;
  email: string;
  avatar_url: string;
  html_url: string;
  location: string;
  occupation: string;
  bio: string;
  content: string;
  profile_views: number;
  isDeleted: boolean;
};

type ContributorModel = Model<TContributor>;

const contributorSchema = new mongoose.Schema<TContributor, ContributorModel>(
  {
    ghid: {
      type: Number,
      required: true,
    },
    gh_username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    html_url: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    occupation: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
    profile_views: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, validateBeforeSave: true }
);

const Contributor: ContributorModel =
  mongoose.models.User ||
  model<TContributor, ContributorModel>('User', contributorSchema);
export default Contributor;
