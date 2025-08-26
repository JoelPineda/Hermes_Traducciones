using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class CompanionController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
