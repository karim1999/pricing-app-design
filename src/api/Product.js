import axios from "axios";
import Constants from "../constants";
import { auth } from "./Auth";

export const productTypes = {
  async get() {
    return axios
      .get(Constants.URL + "/report/All_Product_Types", {
        headers: {
          Authorization: "Zoho-oauthtoken " + (await auth.getToken())
        }
      })
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 401) {
          return productTypes.get(auth.generateToken());
        }
      });
  }
};
export const productPlans = {
  async get() {
    return axios
      .get(Constants.URL + "/report/All_Features_Plans", {
        headers: {
          Authorization: "Zoho-oauthtoken " + (await auth.getToken())
        }
      })
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 401) {
          return productPlans.get(auth.generateToken());
        }
      });
  }
};
export const productFeatures = {
  async get(productType) {
    return axios
      .get(Constants.URL + "/report/Product_Plan_Features_SF_Report", {
        params: {
          criteria: "Product_Type=" + productType
        },
        headers: {
          Authorization: "Zoho-oauthtoken " + (await auth.getToken())
        }
      })
      .then(res => {
        return res.data.data;
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 401) {
          return productPlans.get(auth.generateToken());
        }
      });
  }
};
