using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class ClassController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
