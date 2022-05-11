using System.Text.Json.Serialization;

namespace IntegratorProject.src.utilities
{
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum UserType
    {
        USER,
        ADMIN,
        ONG
    }
}
