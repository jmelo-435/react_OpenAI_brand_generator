import axios from "axios";

const root = "https://react-open-ai-brand-generator.vercel.app/";

const endpoints = Object.freeze({
    Api: "api/",
  });

const Methods = Object.freeze({
    PUT: "PUT",
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    HEAD: "HEAD",
    PATCH: "PATCH",
  });
class ApiRequestParameters {
    constructor(endpoint = endpoints.Api, data = null, method = Methods.POST) {
      this.endpoint = endpoint;
      this.data = data;
      this.method = method;
    }
  }
async function getApiResponse(parameters) {
    const response = await axios({
      data: parameters.data,
      method: parameters.method,
      url: root + parameters.endpoint,
    });
    return response.data;
}

export async function createBrand(business) {
    class CreateBrandResponse {
      constructor(res) {
        this.name = res.name;
        this.slogan = res.slogan;
        this.acronym = res.achronym;
        this.colorScheme=res.color_scheme
        this.description=res.description
        this.font=res.font
        return this;
      }
    }
  
    const params = new ApiRequestParameters(
      endpoints.Api,
      business,
      Methods.POST
    );
    const response = await getApiResponse(params);
    return new CreateBrandResponse(response.brand);
  }