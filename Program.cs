using CSHARPAPI_NarucivanjePacijanata.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<EdunovaContext>(
    opcije => 
    {
        opcije.UseSqlServer(builder.Configuration.GetConnectionString("EdunovaContext"));
    }
    );

//Svi se od svuda na sve mogu�e na�ine nogu spojiti  na na� API
// �itati https://code-maze.com/aspnetcore-webapi-best-practices/
builder.Services.AddCors(opcije =>
{
    opcije.AddPolicy("CorsPolicy",
        builder=>
           builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
        
         );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
    app.UseSwagger();
    app.UseSwaggerUI(opcije => {
        opcije.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
        opcije.EnableTryItOutByDefault();
    });
//}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

//za potrebe produkcije
app.UseStaticFiles();
app.UseDefaultFiles();
app.MapFallbackToFile("index.html");

app.UseCors("CorsPolicy");
//zavr�io za potrebe produkcije

app.Run();
