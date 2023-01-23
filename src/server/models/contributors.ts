import type { TContributor } from '@/types/server/Contributors';
import type { Model } from 'mongoose';
import mongoose, { model } from 'mongoose';

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
      required: true,
    },
    followers: {
      type: Number,
      default: 0,
    },
    following: {
      type: Number,
      default: 0,
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
