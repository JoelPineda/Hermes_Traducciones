using Microsoft.AspNetCore.Mvc;

namespace hermes_translations.Controllers
{
    public class InterpretationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
