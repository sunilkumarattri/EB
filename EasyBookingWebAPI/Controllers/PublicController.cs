using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EasyBookingWebAPI.Controllers
{
    public class PublicController : ApiController
    {
        public IHttpActionResult Index()
        {
            return Json(true);
        }


    }
}
