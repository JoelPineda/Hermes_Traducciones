using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class locationsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
