import {
  EndpointRequest,
  EndpointResponse,
} from "@plugos/plugos/hooks/endpoint";

export function endpointTest(req: EndpointRequest): EndpointResponse {
  console.log("I'm running on the server!", req);
  return {
    status: 200,
    body: "Hello world!",
  };
}
