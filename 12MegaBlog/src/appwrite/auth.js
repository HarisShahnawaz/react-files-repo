// src/appwrite/auth.js
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)     // Your Appwrite endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.account = new Account(this.client);
  }

  /**
   * Create a new user account
   * @param {Object} data - { email, password, name }
   */
  async createAccount({ email, password, name }) {
    try {
      // Create the user
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      // Automatically log in after successful signup
      if (userAccount) {
        return this.login({ email, password });
      }

      return userAccount;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Login user
   * @param {Object} data - { email, password }
   */
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get currently logged-in user
   */
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("getCurrentUser error", error);
      return null;
    }
  }

  /**
   * Logout current user
   */
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("logout error", error);
    }
  }
}

// Export a single instance
const authService = new AuthService();
export default authService;