using System.Text.Json.Serialization;

namespace IntegratorProject.src.utilities
{
    /// <summary>
    /// <para>Enum responsible for setting user types</para>
    /// </summary>
    
    [JsonConverter(typeof(JsonStringEnumConverter))]
    public enum UserType
    {
        USER,
        ADMIN,
        ONG
    }
}
